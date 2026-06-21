# LLM Claude — Landing Page

Next.js landing page for an open-source terminal AI coding assistant. Built from a [Figma Make template](https://www.figma.com/design/ZTIyTbYFe5nvvHUmC3p80f/Convert-Template-to-Code). Includes smooth Lenis scrolling, GSAP-style hero visuals, interactive FAQ accordion, pricing toggle, and a collapsible left-edge **site metrics** panel (visitor count + server stats).

Inspired by the [MNTN landing page](https://github.com/acheronx0577/MNTN) visitor/metrics hub pattern — here backed by **Convex** instead of PocketBase.

## Stack

### Frontend

- **Next.js 16** (App Router)
- **React 18** + **TypeScript**
- **Tailwind CSS 4** — custom tokens and layout
- **Lenis** — smooth scroll
- **GSAP** + **OGL** — hero galaxy background
- **Boxicons-style SVG** — inline icons

### Backend & data

- **Convex** — real-time visitor counter, contact form rate limiting, submission storage
- **Resend** — contact form email (via Convex action)

### Features

- Landing page with scroll-linked sections and tech stack marquee
- **Expandable site metrics panel** (left edge): website views (Convex), CPU/RAM/uptime, GitHub link
- Contact form with server-side rate limiting
- One session = one view count (deduped in Convex)

## Getting started

### 1. Install dependencies

```bash
pnpm install
```

### 2. Environment

```bash
cp .env.example .env.local
```

Edit `.env.local` with your Convex URL (from `npx convex dev`) and optional `NEXT_PUBLIC_GITHUB_URL`.

For production deploy vars, see `.env.deploy.example` and `pnpm env:push`.

### 3. Start Convex + Next.js

Terminal 1 — Convex dev server (creates/syncs schema including `siteStats`):

```bash
pnpm dev:convex
```

Terminal 2 — Next.js:

```bash
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000). Expand the **chevron on the left edge** to see website views and server metrics.

## Scripts

| Command | Description |
| --- | --- |
| `pnpm dev` | Start Next.js development server |
| `pnpm dev:convex` | Start Convex dev server |
| `pnpm build` | Production build |
| `pnpm start` | Serve production build |
| `pnpm lint` | Run ESLint |
| `pnpm env:push` | Push env vars to Vercel + Convex |

## Project structure

- `src/app/` — Next.js layout, page, API routes
- `src/components/landing/` — Interactive UI (nav, FAQ, pricing, **SiteMetricsHub**)
- `src/imports/AiLandingPage1/` — Figma-generated landing page markup and assets
- `convex/` — Convex schema, visitor stats, contact form backend

## Site metrics

Visitor counts are stored in Convex (`siteStats` + `siteVisitSessions`). On first page load per browser session, the client calls `siteStats.recordVisit`; the panel reads live counts via `siteStats.getViewCount`. Server CPU/RAM/uptime come from `GET /api/system-stats`.

## License

Private template assets from Figma Make. Check Figma export terms before redistributing design assets.
