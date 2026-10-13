"use client";

import { Reveal, RevealGroup, motion } from "./motion";

/* ------------------------------------------------------------------ *
 * TESTIMONIALS
 *
 * ⚠️  These are DRAFTS written to the brief, not real quotes. Only
 *     entries with `approved: true` render in production. Drafts show
 *     up in `npm run dev` with a DRAFT badge so you can review layout.
 *
 *     To publish one: replace the quote, title, and company with a
 *     real customer's words (with their written permission), fill in
 *     every [bracketed] value, then set `approved: true`. Publishing
 *     invented testimonials breaks FTC rules on fake reviews.
 * ------------------------------------------------------------------ */
const TESTIMONIALS = [
  {
    quote:
      "We had [three] senior ML roles open for [five] months. Momentum put [eight] qualified engineers in our pipeline in [three] weeks, and every one of them had shipped models under HIPAA and FDA constraints.",
    title: "VP Engineering",
    company: "[Healthcare AI Company]",
    approved: false,
  },
  {
    quote:
      "Our agency kept sending generalists we had to teach PHI handling and clinical validation. Momentum's candidates already knew it. Our interview loop got shorter and we closed [two] hires in [one] quarter.",
    title: "Head of People",
    company: "[Series B Health Tech]",
    approved: false,
  },
];

const SHOW_DRAFTS = process.env.NODE_ENV === "development";

const fadeItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Testimonials() {
  const visible = TESTIMONIALS.filter((t) => t.approved || SHOW_DRAFTS);
  if (visible.length === 0) return null;

  return (
    <section
      id="testimonials"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-accent">
          From hiring teams
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk">
          Faster hires. Better candidates.
        </h2>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-2">
        {visible.map((t) => (
          <motion.figure
            key={t.title + t.company}
            variants={fadeItem}
            className="flex flex-col rounded-2xl border border-white/10 bg-ink-900 p-8 lg:p-10"
          >
            {!t.approved && (
              <span className="mb-6 self-start rounded-full border border-red-400/50 px-3 py-1 text-xs uppercase tracking-widest text-red-300">
                Draft, not shown in production
              </span>
            )}
            <blockquote className="font-display text-[clamp(1.25rem,2.2vw,1.625rem)] font-medium leading-snug tracking-tight text-chalk">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-white/10 pt-6 text-sm">
              <span className="text-chalk">{t.title}</span>
              <span className="text-chalk-muted">, {t.company}</span>
            </figcaption>
          </motion.figure>
        ))}
      </RevealGroup>
    </section>
  );
}
