# Infra cheatsheet

```bash
cd infra
cp .env.example .env
npm install
npm run check
npm run deploy:production
```

First deploy with `SMT_EMAIL_ROUTING_READY=false`, verify the Cloudflare destination email in Gmail, then set it to `true` and deploy again.

Get SMTP settings:

```bash
aws secretsmanager get-secret-value --region us-east-1 --secret-id south-mountain-tech/production/gmail-smtp --query SecretString --output text | jq
```

Gmail uses `email-smtp.us-east-1.amazonaws.com:587` with STARTTLS.
