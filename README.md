# Momentum — Landing Site

Marketing site for **Momentum**, an engineering and product hiring pipeline
service for healthcare tech, focused on Series B-D AI diagnostics companies.
Light, data-first design in teal, green, and coral.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling (tokens in `tailwind.config.ts`)
- **Framer Motion** for scroll + hover animations
- **next/font**: Inter

Fully static (`○ (Static)` prerender), ~134 kB first-load JS.

## Sections

- **Hero**: teal, with an animated DNA helix that unfolds into an org chart
- **Why healthcare tech**: green stat cards (50 companies, 200+ open roles)
- **Company mapping**: redacted company profiles with org trees and hiring gaps
- **Hiring gap**: FDA AI device authorizations per year, with cited sources
- **How it works**: map, pitch, send, hire
- **Pipeline**: example hiring dashboard with filters and reply status
- **Compliance**: HIPAA-aware research callout
- **Why Momentum**: recruiting cost stats, 200 vs 20 outreach chart, comparison table
- **Testimonials**: drafts only; hidden in production until `approved: true`
- **Pricing**: Data Feed Only / Professional
- **CTA**: demo booking + free AI Diagnostics Companies List
- **Footer**

Design tokens, contrast rules, components, and voice are documented in
[`DESIGN.md`](./DESIGN.md). Cited market data lives in
[`lib/market-data.ts`](./lib/market-data.ts). Momentum's own research claims
(company map, example profiles) live in [`lib/research.ts`](./lib/research.ts).

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
- Demo link, contact email, and the lead magnet URL live in
  [`lib/site.ts`](./lib/site.ts). The lead magnet opens a prefilled email until
  you swap in a signup form or hosted file.
