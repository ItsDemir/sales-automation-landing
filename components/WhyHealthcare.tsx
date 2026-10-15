"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Section, SectionHeading } from "./ui";
import { TrendUp, Shield, Target } from "./icons";
import { COMPANIES_MAPPED, OPEN_ROLES_LABEL } from "@/lib/research";

const STATS = [
  {
    value: String(COMPANIES_MAPPED),
    label: "AI diagnostics companies mapped",
    note: "Series B-D, with org charts and open roles for each.",
  },
  {
    value: OPEN_ROLES_LABEL,
    label: "open engineering and product roles",
    note: `Tracked across those ${COMPANIES_MAPPED} companies.`,
  },
  {
    value: "5-10x",
    label: "faster hiring than they can recruit",
    note: "Series B-D healthcare tech teams are adding headcount faster than recruiting can fill it.",
  },
];

const REASONS = [
  {
    Icon: TrendUp,
    title: "Hiring outpaces recruiting.",
    body: "A new round comes with a headcount plan. Recruiting capacity doesn't grow at the same pace, so roles sit open.",
  },
  {
    Icon: Shield,
    title: "The bar is specific.",
    body: "They need engineers and product leaders who understand healthcare compliance and AI. HIPAA, FDA SaMD pathways, and production ML in one person.",
  },
  {
    Icon: Target,
    title: "Traditional recruiting doesn't reach them. We do.",
    body: "These specialists don't answer job posts or generic InMails. They reply to a pitch that shows you understand their work.",
  },
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function WhyHealthcare() {
  return (
    <Section id="why-healthcare">
      <SectionHeading eyebrow="Why healthcare tech" title="We picked one vertical and mapped all of it.">
        Series B-D healthcare tech companies are hiring faster than they can
        recruit. We focus on AI diagnostics, where the gap is widest.
      </SectionHeading>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-3">
        {STATS.map((s) => (
          <motion.div
            key={s.label}
            variants={fadeItem}
            className="rounded-xl border border-primary/40 bg-surface p-7"
          >
            <p className="text-5xl font-bold tracking-tight text-secondary-600 lg:text-6xl">
              {s.value}
            </p>
            <p className="mt-3 text-base font-semibold text-ink">{s.label}</p>
            <p className="mt-2 text-sm leading-relaxed text-ink-subtle">{s.note}</p>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mt-16 grid gap-10 md:grid-cols-3">
        {REASONS.map(({ Icon, title, body }) => (
          <div key={title}>
            <Icon className="h-6 w-6 text-primary" />
            <h3 className="mt-4 text-lg font-semibold text-ink">{title}</h3>
            <p className="mt-2 leading-relaxed text-ink-muted">{body}</p>
          </div>
        ))}
      </Reveal>
    </Section>
  );
}
