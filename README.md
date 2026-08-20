# South Mountain Technologies

Community website and infrastructure for `southmountaintech.com`.

## Stack

- SolidJS `2.0.0-rc.0`
- `@solidjs/web` `2.0.0-rc.0`
- Solid Router `1.0.0`
- Vite + `vite-plugin-solid` 3 next line
- TypeScript + custom CSS Modules
- SST v3 + Cloudflare + AWS SES

## Local development

```bash
bun install
bun run dev
```

```bash
bun run typecheck
bun run build
```

## Real SPA routes

`/`, `/podcast`, `/podcast/:slug`, `/articles`, `/articles/:slug`, `/projects`, `/projects/:slug`, `/showcase`, `/events`, `/events/:slug`, `/community`, `/notes`, `/client-work`, `/client-work/:slug`, `/about`, `/join`.

The Cloudflare StaticSite uses `index.html` as its fallback so deep links load correctly.

## CSS architecture

The implementation borrows architectural ideas from the Syntax.fm codebase without copying its brand or assets: OKLCH tokens, fluid `clamp()` typography, cascade layers, `color-mix()`, container queries, native gradient/mask texture, and component-local CSS Modules.

## Email

Inbound: `chris@southmountaintech.com` -> Cloudflare Email Routing -> `christopher.birster+smtntech@gmail.com`.

Outbound: Gmail “Send mail as” -> Amazon SES SMTP -> `From: chris@southmountaintech.com`.

See `infra/README.md` for the two-phase routing cutover and Gmail SMTP setup.

## Honest launch-stage content

The community, podcast, and meetup are presented as forming. The site does not fabricate published podcast history, meetup dates, member counts, testimonials, guest confirmations, or client metrics.
