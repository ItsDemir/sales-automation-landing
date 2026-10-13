"use client";

import { Reveal, RevealGroup, motion } from "./motion";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ *
 * HEADLINE STATS: the cost of hiring healthcare tech engineers today
 * and what Momentum's AI diagnostics focus changes.
 * ------------------------------------------------------------------ */
const STATS = [
  {
    stat: "$30K-$50K",
    caption:
      "Hiring a mid-market healthcare tech engineer costs $30K-$50K in recruiter fees or 6-12 months of hiring time.",
    note: "Agency fees typically run 20-25% of first-year salary. On a $150K-$200K engineer, that's $30K-$50K per hire.",
  },
  {
    stat: "50",
    caption:
      "Our AI diagnostics focus gives you access to 50 pre-mapped companies with identified talent gaps.",
    note: "Org charts, open roles, and engineering leaders already researched before your first call with us.",
  },
];

/* Outreach needed to land one qualified hire. Bar widths scale to 200. */
const OUTREACH = [
  {
    label: "Traditional recruiting",
    count: 200,
    detail: "cold outreaches",
    highlight: false,
  },
  {
    label: "Momentum",
    count: 20,
    detail: "personalized outreaches to verified engineering leaders",
    highlight: true,
  },
];
const OUTREACH_MAX = 200;

/* ------------------------------------------------------------------ *
 * COMPARISON TABLE: traditional recruiting vs Momentum.
 * ------------------------------------------------------------------ */
const COMPARISON = [
  [
    "What you pay",
    "20-25% of first-year salary, per hire",
    "$1,500/mo + $15 per qualified candidate",
  ],
  ["Outreach for 1 qualified hire", "~200 cold messages", "~20 personalized pitches"],
  ["Who you reach", "Active job seekers", "Verified engineering leaders at your target companies"],
  ["Candidate source", "Job boards and inbound", "50 mapped AI diagnostics companies"],
  [
    "Domain fit",
    "Screened after the fact",
    "Healthcare compliance + AI experience, targeted up front",
  ],
  ["The pitch", "A copied job description", "Written for each engineer's team and stack"],
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
};

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* ── Heading ─────────────────────────────────────────────── */}
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-accent">
          Why Momentum
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk">
          The math on healthcare tech hiring.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-chalk-muted">
          Agencies take a cut of salary. Job posts pull in generalists.
          Momentum puts engineers who already know healthcare compliance and
          AI into your pipeline, and you pay $15 for each qualified one.
        </p>
      </Reveal>

      {/* ── Headline stats ──────────────────────────────────────── */}
      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {STATS.map((s) => (
          <motion.div
            key={s.stat}
            variants={fadeItem}
            className="flex flex-col bg-ink-900 p-7 lg:p-10"
          >
            <p className="font-display text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none tracking-tightest text-accent">
              {s.stat}
            </p>
            <p className="mt-5 text-lg leading-relaxed text-chalk">
              {s.caption}
            </p>
            <p className="mt-4 text-sm leading-relaxed text-chalk-faint">
              {s.note}
            </p>
          </motion.div>
        ))}
      </RevealGroup>

      {/* ── Outreach comparison: 200 vs 20 ──────────────────────── */}
      <Reveal className="mt-6">
        <div className="rounded-2xl border border-white/10 bg-ink-800 p-7 lg:p-10">
          <p className="text-xs uppercase tracking-widest text-chalk-muted">
            Outreach to land 1 qualified hire
          </p>
          <div className="mt-8 space-y-7">
            {OUTREACH.map((o) => (
              <div key={o.label}>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                  <p
                    className={`font-display text-lg font-medium ${
                      o.highlight ? "text-accent" : "text-chalk"
                    }`}
                  >
                    {o.label}
                  </p>
                  <p className="text-sm text-chalk-muted">
                    <span
                      className={`font-display text-2xl font-semibold tabular-nums ${
                        o.highlight ? "text-accent" : "text-chalk"
                      }`}
                    >
                      {o.count}
                    </span>{" "}
                    {o.detail}
                  </p>
                </div>
                {/* Observe the full-width track: a zero-width bar near the
                    left edge never intersects the inset viewport on phones. */}
                <motion.div
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-80px" }}
                  className="mt-3 h-3 overflow-hidden rounded-full bg-white/5"
                >
                  <motion.div
                    variants={{
                      hidden: { width: 0 },
                      show: {
                        width: `${(o.count / OUTREACH_MAX) * 100}%`,
                        transition: { duration: 1.2, ease: EASE, delay: 0.15 },
                      },
                    }}
                    className={`h-full rounded-full ${
                      o.highlight ? "bg-accent" : "bg-chalk-faint"
                    }`}
                  />
                </motion.div>
              </div>
            ))}
          </div>
          <p className="mt-8 max-w-3xl text-[15px] leading-relaxed text-chalk-muted">
            Traditional recruiting: 200 cold outreaches to find 1 qualified
            hire. Momentum: 20 personalized outreaches to verified engineering
            leaders at your target companies.
          </p>
        </div>
      </Reveal>

      {/* ── Traditional recruiting vs Momentum ──────────────────── */}
      <Reveal className="mt-20">
        <h3 className="font-display text-2xl font-medium tracking-tightest text-chalk">
          Traditional recruiting vs. Momentum
        </h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-widest text-chalk-muted">
                <th className="border-b border-white/10 py-4 pr-4 font-normal">
                  &nbsp;
                </th>
                <th className="border-b border-white/10 py-4 pr-4 font-normal">
                  Traditional recruiting
                </th>
                <th className="border-b border-accent/30 py-4 pr-4 font-normal text-accent">
                  With Momentum
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([row, traditional, momentum]) => (
                <tr key={row}>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk">
                    {row}
                  </td>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk-muted">
                    {traditional}
                  </td>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk">
                    {momentum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </section>
  );
}
