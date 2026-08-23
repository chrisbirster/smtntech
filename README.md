# South Mountain Technologies

Community website and infrastructure for `southmountaintech.com`.

## Stack

- SolidJS `2.0.0-rc.0`
- `@solidjs/web` `2.0.0-rc.0`
- Solid Router `2.0.0-next.16`
- Vite + `@solidjs/vite-plugin` `3.0.0-next.29`
- TypeScript + custom CSS Modules
- SST v3 + Cloudflare + AWS SES
- Node.js 22+ with npm

This project follows the Solid 2 RC package boundary: DOM rendering and JSX come from `@solidjs/web`, routing uses the Solid Router 2 static `createRouter()` API, and lifecycle/effect code follows the Solid 2 compute/apply and `onSettled()` model.

## Local development

```bash
git clone https://github.com/chrisbirster/smtntech.git
cd smtntech
npm install
npm run dev
```

Vite will normally serve the site at `http://localhost:5173`.

Verify the web app with:

```bash
npm run format:check
npm run typecheck
npm run build
npm run test:visual
```

Preview the production build with:

```bash
npm run preview
```

## Real SPA routes

`/`, `/podcast`, `/podcast/:slug`, `/articles`, `/articles/:slug`, `/projects`, `/projects/:slug`, `/showcase`, `/events`, `/events/:slug`, `/community`, `/notes`, `/client-work`, `/client-work/:slug`, `/about`, `/join`.

The Cloudflare StaticSite uses `index.html` as its fallback so deep links load correctly.

## CSS architecture

The implementation borrows organizational ideas from the Syntax.fm codebase without copying its brand or assets. Global styles are intentionally small and layered by responsibility:

- `src/styles/tokens.css` defines design tokens.
- `src/styles/base.css` owns element defaults and accessibility foundations.
- `src/styles/layout.css` contains shared layout primitives.
- `src/styles/components.css` contains the few deliberately global UI classes.
- Component-specific styling stays in a colocated CSS Module.

Route components live in `src/pages`. Reusable page patterns live in `src/components`, while homepage-only sections and application-shell components are grouped under `src/components/home` and `src/components/shell` respectively. Pages should read as a composition of named components instead of containing an entire screen in one file.

Run `npm run format` before committing. Prettier uses a 100-character print width, and source files should generally stay below 300–500 lines. When a file grows beyond that range, split it around a real UI or styling responsibility rather than creating arbitrary fragments.

## Email

Inbound: `chris@southmountaintech.com` -> Cloudflare Email Routing -> `christopher.birster+smtntech@gmail.com`.

Outbound: Gmail “Send mail as” -> Amazon SES SMTP -> `From: chris@southmountaintech.com`.

See `infra/README.md` for the two-phase routing cutover and Gmail SMTP setup.

## Honest launch-stage content

The community, podcast, and meetup are presented as forming. The site does not fabricate published podcast history, meetup dates, member counts, testimonials, guest confirmations, or client metrics.
