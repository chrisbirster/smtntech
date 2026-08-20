# South Mountain Technologies infrastructure

This SST v3 stack deploys the Solid SPA to Cloudflare and configures the lightweight email setup for `southmountaintech.com`.

## Architecture

```text
Website
southmountaintech.com -> Cloudflare StaticSite -> SolidJS SPA

Inbound email
chris@southmountaintech.com -> Cloudflare Email Routing -> christopher.birster+smtntech@gmail.com

Outbound email
Gmail Send mail as -> Amazon SES SMTP us-east-1:587 STARTTLS -> From: chris@southmountaintech.com
```

SES owns outbound authentication only; Cloudflare continues to own inbound MX routing. Easy DKIM + DMARC are created for the domain. The Gmail SMTP IAM user is limited to `ses:SendRawEmail` and restricted to the `chris@southmountaintech.com` From address. SMTP credentials are stored in AWS Secrets Manager.

## Configure

```bash
cd infra
cp .env.example .env
npm install
npm run check
```

Add AWS credentials to your shell and populate the Cloudflare API token/account ID in `.env`.

## Phase 1

Keep:

```dotenv
SMT_EMAIL_ROUTING_READY=false
```

Then:

```bash
npm run deploy:production
```

This creates the SES identity/DKIM records, the SMTP principal/secret, the website (unless disabled), and the Cloudflare forwarding destination. Cloudflare sends a verification message to `christopher.birster+smtntech@gmail.com`.

## Phase 2

After clicking the destination verification link in Gmail:

```dotenv
SMT_EMAIL_ROUTING_READY=true
```

Deploy again:

```bash
npm run deploy:production
```

Cloudflare Email Routing is enabled and the literal route for `chris@southmountaintech.com` is created.

## Get Gmail SMTP credentials

```bash
aws secretsmanager get-secret-value \
  --region us-east-1 \
  --secret-id south-mountain-tech/production/gmail-smtp \
  --query SecretString \
  --output text | jq
```

In Gmail: Settings -> Accounts and Import -> Send mail as -> Add another email address. Use `email-smtp.us-east-1.amazonaws.com`, port `587`, STARTTLS, and the username/password from the secret.

New SES accounts start in sandbox mode. Request SES production access in `us-east-1` before relying on this address for normal external recipients.
