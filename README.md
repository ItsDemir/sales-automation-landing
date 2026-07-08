# Momentum — Landing Site

A modern, futuristic marketing site for **Momentum**, an autonomous B2B sales
outreach service. Migrated from a vanilla HTML/CSS page to a Next.js app with a
dark, editorial, motion-driven design inspired by Midjourney, Runway, and Cosmos.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling (flat, dark-first design system)
- **Framer Motion** for scroll + hover animations
- **next/font** — Space Grotesk (display) + Inter (body)

Fully static (`○ (Static)` prerender), ~134 kB first-load JS.

## Sections

- **Hero** — oversized headline + live "campaign" demo panel with animated counters
- **Marquee** — capability ticker
- **How it works** — four steps with outline icons
- **Why Momentum** — alternating feature rows with flat animated visuals
- **Pricing** — Starter / Professional / Enterprise
- **CTA** — closing demo prompt
- **Footer**

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm run start    # serve the build
```

## Deploy (Vercel)

```bash
npm i -g vercel   # once
vercel            # preview deploy (follow the prompts)
vercel --prod     # production deploy
```

Or connect the GitHub repo at [vercel.com/new](https://vercel.com/new) — Vercel
auto-detects Next.js; no configuration required.

## Notes

- The original vanilla site is preserved under [`legacy/`](./legacy).
- Design tokens (colors, fonts, spacing) live in
  [`tailwind.config.ts`](./tailwind.config.ts).
- Update the demo CTA link (`https://calendly.com/`) and contact email in
  `components/CTA.tsx`, `components/Footer.tsx`, and `components/Navbar.tsx`.
