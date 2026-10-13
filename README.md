# Momentum — Landing Site

A modern, futuristic marketing site for **Momentum**, an engineering and product
hiring pipeline service for healthcare tech, focused on Series B-D AI
diagnostics companies. Migrated from a vanilla HTML/CSS page to a Next.js app with a
dark, editorial, motion-driven design inspired by Midjourney, Runway, and Cosmos.

## Stack

- **Next.js 14** (App Router) + **React 18** + **TypeScript**
- **Tailwind CSS** for styling (flat, dark-first design system)
- **Framer Motion** for scroll + hover animations
- **next/font** — Space Grotesk (display) + Inter (body)

Fully static (`○ (Static)` prerender), ~134 kB first-load JS.

## Sections

- **Hero**: headline + live "hiring pipeline" demo panel with animated counters
- **Marquee**: capability ticker
- **Why healthcare tech**: why we focus on this vertical
- **How it works**: four steps with outline icons
- **Why Momentum**: healthcare hiring stats, 200 vs 20 outreach chart, comparison table
- **Testimonials**: drafts only; hidden in production until `approved: true`
  (see `components/Testimonials.tsx`)
- **Pricing**: Data Feed Only / Professional
- **CTA**: demo booking + free AI Diagnostics Companies List lead magnet
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
- Demo link, contact email, and the lead magnet URL live in
  [`lib/site.ts`](./lib/site.ts). The lead magnet opens a prefilled email until
  you swap in a signup form or hosted file.
