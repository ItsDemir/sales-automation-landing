"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Section, SectionHeading } from "./ui";
import BarChart from "./BarChart";

/* ------------------------------------------------------------------ *
 * WHY MOMENTUM: the cost of hiring healthcare tech engineers today and
 * what an AI diagnostics focus changes.
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
    note: "Org charts, open roles, and engineering leaders researched before your first call with us.",
  },
];

/* Emphasis pattern: Momentum in coral, the baseline in slate. */
const OUTREACH = [
  { label: "Traditional recruiting", value: 200, muted: true },
  { label: "Momentum", value: 20 },
];

const COMPARISON = [
  ["What you pay", "20-25% of first-year salary, per hire", "$1,500/mo + $15 per qualified candidate"],
  ["Outreach for 1 qualified hire", "~200 cold messages", "~20 personalized pitches"],
  ["Who you reach", "Active job seekers", "Verified engineering leaders at your target companies"],
  ["Candidate source", "Job boards and inbound", "50 mapped AI diagnostics companies"],
  ["Domain fit", "Screened after the fact", "Healthcare compliance + AI experience, targeted up front"],
  ["The pitch", "A copied job description", "Written for each engineer's team and stack"],
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Features() {
  return (
    <Section id="features" tone="surface">
      <SectionHeading eyebrow="Why Momentum" title="The math on healthcare tech hiring.">
        Agencies take a cut of salary. Job posts pull in generalists. With
        Momentum, each qualified candidate costs $15.
      </SectionHeading>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {STATS.map((s) => (
          <motion.div
            key={s.stat}
            variants={fadeItem}
            className="rounded-xl border border-line bg-canvas p-7 lg:p-8"
          >
            <p className="text-5xl font-bold tracking-tight text-ink lg:text-6xl">{s.stat}</p>
            <p className="mt-5 text-lg leading-relaxed text-ink">{s.caption}</p>
            <p className="mt-3 text-sm leading-relaxed text-ink-subtle">{s.note}</p>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mt-5">
        <div className="rounded-xl border border-line bg-canvas p-7 lg:p-8">
          <h3 className="text-base font-semibold text-ink">Outreach to land 1 qualified hire</h3>
          <p className="mt-1 text-sm text-ink-subtle">Messages sent per qualified hire</p>
          <div className="mt-8">
            <BarChart title="Outreach to land 1 qualified hire" data={OUTREACH} />
          </div>
          <p className="mt-6 max-w-3xl leading-relaxed text-ink-muted">
            Traditional recruiting: 200 cold outreaches to find 1 qualified
            hire. Momentum: 20 personalized outreaches to verified engineering
            leaders at your target companies.
          </p>
        </div>
      </Reveal>

      <Reveal className="mt-16">
        <h3 className="text-display-md text-ink">Traditional recruiting vs. Momentum</h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[640px] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-[0.08em]">
                <th className="border-b border-line py-3 pr-4 font-semibold text-ink-subtle">
                  <span className="sr-only">Dimension</span>
                </th>
                <th className="border-b border-line py-3 pr-4 font-semibold text-ink-subtle">
                  Traditional recruiting
                </th>
                <th className="border-b-2 border-primary py-3 pr-4 font-semibold text-primary-700">
                  With Momentum
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([row, traditional, momentum]) => (
                <tr key={row}>
                  <td className="border-b border-line py-4 pr-4 font-medium text-ink">{row}</td>
                  <td className="border-b border-line py-4 pr-4 text-ink-subtle">{traditional}</td>
                  <td className="border-b border-line py-4 pr-4 text-ink">{momentum}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
