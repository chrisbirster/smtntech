# South Mountain Technologies

Community website and infrastructure for `southmountaintech.com`.

## Stack

- SolidJS `2.0.0-rc.0`
- `@solidjs/web` `2.0.0-rc.0`
- Solid Router `2.0.0-next.16`
- Vite + `vite-plugin-solid` 3 next line
- TypeScript + custom CSS Modules
- SST v3 + Cloudflare + AWS SES
- Node.js 22+ with npm

## Local development

```bash
git clone https://github.com/chrisbirster/smtntech.git
cd smtntech
git switch feat/solid-site-email-infra
npm install
npm run dev
```

Vite will normally serve the site at `http://localhost:5173`.

Verify the web app with:

```bash
npm run typecheck
npm run build
```

Preview the production build with:

```bash
npm run preview
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
