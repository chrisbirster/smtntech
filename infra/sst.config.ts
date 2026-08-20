/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    const cloudflareApiToken = (process.env.CLOUDFLARE_API_TOKEN || "").trim();
    return {
      name: "south-mountain-tech-infra",
      home: "aws",
      removal: input?.stage === "production" ? "retain" : "remove",
      providers: {
        aws: { region: (process.env.AWS_REGION ?? "us-east-1") as any },
        cloudflare: { version: "6.13.0", ...(cloudflareApiToken !== "" ? { apiToken: cloudflareApiToken } : {}) },
      },
    };
  },
  async run() {
    const pulumi = await import("@pulumi/pulumi");
    const region = (process.env.AWS_REGION ?? "us-east-1").trim();
    const domain = (process.env.SMT_DOMAIN ?? "southmountaintech.com").trim();
    const fromAddress = (process.env.SMT_FROM_ADDRESS ?? `chris@${domain}`).trim();
    const forwardTo = (process.env.SMT_FORWARD_TO ?? "christopher.birster+smtntech@gmail.com").trim();
    const routingReady = (process.env.SMT_EMAIL_ROUTING_READY ?? "false").trim().toLowerCase() === "true";
    const deploySite = (process.env.SMT_DEPLOY_SITE ?? "true").trim().toLowerCase() !== "false";
    const cloudflareAccountId = requireEnv("CLOUDFLARE_DEFAULT_ACCOUNT_ID");
    if (region !== "us-east-1") throw new Error(`SES SMTP is pinned to us-east-1 (received ${region}).`);
    if (!fromAddress.endsWith(`@${domain}`)) throw new Error(`SMT_FROM_ADDRESS must be an address on ${domain}.`);

    const zone = await cloudflare.getZone({ filter: { match: "all", name: domain, account: { id: cloudflareAccountId } } });
    const email = new sst.aws.Email("SouthMountainEmail", { sender: domain, dns: sst.cloudflare.dns(), dmarc: "v=DMARC1; p=none;" });
    const website = deploySite ? new sst.cloudflare.StaticSite("Website", { path: "..", build: { command: "bun run build", output: "dist" }, domain, errorPage: "index.html" }) : undefined;
    const destination = new cloudflare.EmailRoutingAddress("ChrisGmailDestination", { accountId: cloudflareAccountId, email: forwardTo });

    let routingRule: cloudflare.EmailRoutingRule | undefined;
    if (routingReady) {
      const routingSettings = new cloudflare.EmailRoutingSettings("SouthMountainEmailRouting", { zoneId: zone.id });
      routingRule = new cloudflare.EmailRoutingRule("ChrisEmailRoute", {
        zoneId: zone.id,
        name: `${fromAddress} -> ${forwardTo}`,
        enabled: true,
        matchers: [{ type: "literal", field: "to", value: fromAddress }],
        actions: [{ type: "forward", values: [forwardTo] }],
      }, { dependsOn: [destination, routingSettings] });
    }

    const smtpUser = new aws.iam.User("GmailSendAsUser", { name: `south-mountain-tech-gmail-smtp-${$app.stage}`, path: "/service-accounts/" });
    new aws.iam.UserPolicy("GmailSendAsPolicy", {
      user: smtpUser.name,
      policy: aws.iam.getPolicyDocumentOutput({ statements: [{ sid: "SendOnlyAsChris", effect: "Allow", actions: ["ses:SendRawEmail"], resources: ["*"], conditions: [{ test: "StringEquals", variable: "ses:FromAddress", values: [fromAddress] }] }] }).json,
    });
    const smtpKey = new aws.iam.AccessKey("GmailSendAsCredentials", { user: smtpUser.name });
    const smtpSecret = new aws.secretsmanager.Secret("GmailSendAsSecret", { name: `south-mountain-tech/${$app.stage}/gmail-smtp`, description: `Amazon SES SMTP credentials for Gmail Send mail as ${fromAddress}` });
    new aws.secretsmanager.SecretVersion("GmailSendAsSecretValue", { secretId: smtpSecret.id, secretString: pulumi.jsonStringify({ server: `email-smtp.${region}.amazonaws.com`, port: 587, security: "STARTTLS", username: smtpKey.id, password: smtpKey.sesSmtpPasswordV4, from: fromAddress }) });

    return { region, domain, sesSender: email.sender, fromAddress, forwardTo, cloudflareZoneId: zone.id, cloudflareDestinationId: destination.id, emailRouting: routingReady ? "enabled" : "verify the destination in Gmail, then set SMT_EMAIL_ROUTING_READY=true", emailRoutingRuleId: routingRule?.id, smtpServer: `email-smtp.${region}.amazonaws.com`, smtpPort: 587, smtpSecretName: smtpSecret.name, websiteUrl: website?.url };
  },
});

function requireEnv(name: string): string { const value = (process.env[name] ?? "").trim(); if (value !== "") return value; throw new Error(`${name} is required.`); }
