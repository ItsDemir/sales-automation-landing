"use client";

import { RevealGroup, motion } from "./motion";
import { Section, SectionHeading } from "./ui";

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
    <Section id="testimonials">
      <SectionHeading eyebrow="From hiring teams" title="Faster hires. Better candidates." />

      <RevealGroup className="mt-14 grid gap-5 lg:grid-cols-2">
        {visible.map((t) => (
          <motion.figure
            key={t.title + t.company}
            variants={fadeItem}
            className="flex flex-col rounded-xl border border-line bg-surface p-7 lg:p-9"
          >
            {!t.approved && (
              <span className="mb-6 self-start rounded-md border border-red-200 bg-red-50 px-2.5 py-1 text-xs font-semibold uppercase tracking-[0.08em] text-red-700">
                Draft, not shown in production
              </span>
            )}
            <blockquote className="text-xl font-medium leading-relaxed text-ink">
              &ldquo;{t.quote}&rdquo;
            </blockquote>
            <figcaption className="mt-8 border-t border-line pt-5 text-sm">
              <span className="font-semibold text-ink">{t.title}</span>
              <span className="text-ink-subtle">, {t.company}</span>
            </figcaption>
          </motion.figure>
        ))}
      </RevealGroup>
    </Section>
  );
}
