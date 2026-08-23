#!/usr/bin/env bash

set -Eeuo pipefail

API_BASE="${CLOUDFLARE_API_BASE_URL:-https://api.cloudflare.com/client/v4}"
ACCOUNT_ID="${CLOUDFLARE_DEFAULT_ACCOUNT_ID:-${CF_ACCOUNT_ID:-}}"
BOOTSTRAP_TOKEN="${CLOUDFLARE_BOOTSTRAP_TOKEN:-}"
DOMAIN="${SMT_DOMAIN:-southmountaintech.com}"
ZONE_ID="${CLOUDFLARE_ZONE_ID:-}"
TOKEN_NAME="${SMT_CLOUDFLARE_TOKEN_NAME:-south-mountain-tech-sst-production}"
EXPIRES_ON="${SMT_CLOUDFLARE_TOKEN_EXPIRES_ON:-}"
INCLUDE_KV="${SMT_CLOUDFLARE_INCLUDE_KV:-auto}"
ASSUME_YES=false

usage() {
  cat <<'EOF'
Create a least-privilege, account-owned Cloudflare token for the SST stack.

Required environment variables:
  CLOUDFLARE_DEFAULT_ACCOUNT_ID   Cloudflare account ID
  CLOUDFLARE_BOOTSTRAP_TOKEN      Temporary token with Account API Tokens Write
                                  and Zone Read permissions

Optional environment variables:
  SMT_DOMAIN                      Zone name (default: southmountaintech.com)
  CLOUDFLARE_ZONE_ID              Skip automatic zone lookup
  SMT_CLOUDFLARE_TOKEN_NAME       Created token name
  SMT_CLOUDFLARE_TOKEN_EXPIRES_ON RFC 3339 expiration timestamp
  SMT_CLOUDFLARE_INCLUDE_KV       auto, true, or false. "auto" includes KV for
                                  the legacy StaticSite and omits it for StaticSiteV2.

Options:
  --yes                           Skip the confirmation prompt
  --help                          Show this help

The created token value is printed once. Store it securely; Cloudflare does not
return the value again after creation.
EOF
}

die() {
  printf 'Error: %s\n' "$*" >&2
  exit 1
}

for argument in "$@"; do
  case "$argument" in
    --yes) ASSUME_YES=true ;;
    --help|-h) usage; exit 0 ;;
    *) die "Unknown option: $argument" ;;
  esac
done

for command_name in curl jq; do
  command -v "$command_name" >/dev/null 2>&1 || die "$command_name is required."
done

[[ -n "$ACCOUNT_ID" ]] || die "Set CLOUDFLARE_DEFAULT_ACCOUNT_ID."
[[ "$ACCOUNT_ID" =~ ^[[:xdigit:]]{32}$ ]] || die "CLOUDFLARE_DEFAULT_ACCOUNT_ID must be a 32-character Cloudflare ID."
[[ -n "$BOOTSTRAP_TOKEN" ]] || die "Set CLOUDFLARE_BOOTSTRAP_TOKEN."
[[ -n "$DOMAIN" ]] || die "SMT_DOMAIN cannot be empty."

authorization_header="Authorization: Bearer $BOOTSTRAP_TOKEN"

if [[ -n "$ZONE_ID" && ! "$ZONE_ID" =~ ^[[:xdigit:]]{32}$ ]]; then
  die "CLOUDFLARE_ZONE_ID must be a 32-character Cloudflare ID."
fi

# Always resolve the zone from its name and account. This prevents a stale or
# accidentally copied account ID from being used as a zone resource.
printf 'Resolving Cloudflare zone for %s...\n' "$DOMAIN"
zone_response="$({
  curl -fsS --get "$API_BASE/zones" \
    -H "$authorization_header" \
    --data-urlencode "name=$DOMAIN" \
    --data-urlencode "account.id=$ACCOUNT_ID"
})" || die "Unable to query the Cloudflare zone. Check the bootstrap token's Zone Read permission."

resolved_zone_id="$(jq -er '
  if .success == true and (.result | length) == 1
  then .result[0].id
  else empty
  end
' <<<"$zone_response")" || die "Expected exactly one zone named $DOMAIN in account $ACCOUNT_ID."

if [[ -n "$ZONE_ID" && "$ZONE_ID" != "$resolved_zone_id" ]]; then
  die "CLOUDFLARE_ZONE_ID ($ZONE_ID) does not match $DOMAIN ($resolved_zone_id). Unset CLOUDFLARE_ZONE_ID or correct it."
fi

ZONE_ID="$resolved_zone_id"

permission_id() {
  local permission_name="$1"
  local permission_scope="$2"
  local permission_response
  local resolved_id

  permission_response="$({
    curl -fsS --get "$API_BASE/accounts/$ACCOUNT_ID/tokens/permission_groups" \
      -H "$authorization_header" \
      --data-urlencode "name=$permission_name" \
      --data-urlencode "scope=$permission_scope"
  })" || die "Unable to query permission group: $permission_name"

  resolved_id="$(jq -er --arg name "$permission_name" '
    [.result[] | select(.name == $name)]
    | if length == 1 then .[0].id else empty end
  ' <<<"$permission_response")" || die "Could not resolve a unique permission group named: $permission_name"

  printf '%s' "$resolved_id"
}

case "$INCLUDE_KV" in
  auto)
    script_directory="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
    if grep -q 'StaticSiteV2' "$script_directory/../sst.config.ts"; then
      INCLUDE_KV=false
    else
      INCLUDE_KV=true
    fi
    ;;
  true|false) ;;
  *) die "SMT_CLOUDFLARE_INCLUDE_KV must be auto, true, or false." ;;
esac

printf 'Resolving current Cloudflare permission-group IDs...\n'

workers_scripts_id="$(permission_id "Workers Scripts Write" "com.cloudflare.api.account")"
email_addresses_id="$(permission_id "Email Routing Addresses Write" "com.cloudflare.api.account")"
account_settings_id="$(permission_id "Account Settings Read" "com.cloudflare.api.account")"

zone_read_id="$(permission_id "Zone Read" "com.cloudflare.api.account.zone")"
dns_write_id="$(permission_id "DNS Write" "com.cloudflare.api.account.zone")"
workers_routes_id="$(permission_id "Workers Routes Write" "com.cloudflare.api.account.zone")"
email_rules_id="$(permission_id "Email Routing Rules Write" "com.cloudflare.api.account.zone")"

account_permissions="$(jq -cn \
  --arg workers "$workers_scripts_id" \
  --arg email "$email_addresses_id" \
  --arg settings "$account_settings_id" \
  '[{id: $workers}, {id: $email}, {id: $settings}]')"

if [[ "$INCLUDE_KV" == "true" ]]; then
  workers_kv_id="$(permission_id "Workers KV Storage Write" "com.cloudflare.api.account")"
  account_permissions="$(jq -cn \
    --argjson permissions "$account_permissions" \
    --arg kv "$workers_kv_id" \
    '$permissions + [{id: $kv}]')"
fi

zone_permissions="$(jq -cn \
  --arg zone "$zone_read_id" \
  --arg dns "$dns_write_id" \
  --arg routes "$workers_routes_id" \
  --arg email "$email_rules_id" \
  '[{id: $zone}, {id: $dns}, {id: $routes}, {id: $email}]')"

account_resource="com.cloudflare.api.account.$ACCOUNT_ID"
zone_resource="com.cloudflare.api.account.zone.$ZONE_ID"

payload="$(jq -cn \
  --arg name "$TOKEN_NAME" \
  --arg expires "$EXPIRES_ON" \
  --arg account_resource "$account_resource" \
  --arg zone_resource "$zone_resource" \
  --argjson account_permissions "$account_permissions" \
  --argjson zone_permissions "$zone_permissions" \
  '{
    name: $name,
    policies: [
      {
        effect: "allow",
        permission_groups: $account_permissions,
        resources: {($account_resource): "*"}
      },
      {
        effect: "allow",
        permission_groups: $zone_permissions,
        resources: {($zone_resource): "*"}
      }
    ]
  } + (if $expires == "" then {} else {expires_on: $expires} end)')"

printf '\nToken name: %s\n' "$TOKEN_NAME"
printf 'Account:    %s\n' "$ACCOUNT_ID"
printf 'Zone:       %s (%s)\n' "$DOMAIN" "$ZONE_ID"
printf 'Legacy KV:  %s\n' "$INCLUDE_KV"
if [[ -n "$EXPIRES_ON" ]]; then printf 'Expires:    %s\n' "$EXPIRES_ON"; fi

if [[ "$ASSUME_YES" != "true" ]]; then
  printf '\nCreate this Cloudflare token? [y/N] '
  read -r confirmation
  [[ "$confirmation" == "y" || "$confirmation" == "Y" ]] || die "Token creation cancelled."
fi

response_file="$(mktemp "${TMPDIR:-/tmp}/smtn-cloudflare-token.XXXXXX")"
chmod 600 "$response_file"
trap 'rm -f "$response_file"' EXIT

http_status="$(curl -sS \
  -o "$response_file" \
  -w '%{http_code}' \
  -X POST "$API_BASE/accounts/$ACCOUNT_ID/tokens" \
  -H "$authorization_header" \
  -H 'Content-Type: application/json' \
  --data "$payload")" || die "Cloudflare token creation request failed."

if [[ "$http_status" -lt 200 || "$http_status" -ge 300 ]]; then
  jq -r '.errors[]? | "Cloudflare error \(.code): \(.message)"' "$response_file" >&2 || true
  die "Cloudflare returned HTTP $http_status."
fi

created_token="$(jq -er 'if .success == true then .result.value else empty end' "$response_file")" \
  || die "Cloudflare did not return a token value."
created_token_id="$(jq -er '.result.id' "$response_file")" || die "Cloudflare did not return a token ID."

printf '\nCloudflare token created successfully.\n'
printf 'Token ID: %s\n' "$created_token_id"
printf '\nCopy this value now and store it securely:\n\n%s\n' "$created_token"
printf '\nFor infra/.env:\n'
printf 'CLOUDFLARE_API_TOKEN=%s\n' "$created_token"
printf 'CLOUDFLARE_DEFAULT_ACCOUNT_ID=%s\n' "$ACCOUNT_ID"
