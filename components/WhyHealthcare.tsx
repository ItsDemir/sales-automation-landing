"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Chart, Shield, Target } from "./icons";

const REASONS = [
  {
    Icon: Chart,
    stat: "5-10x",
    title:
      "Series B-D healthcare tech companies are hiring 5-10x faster than they can recruit.",
    body: "A new round comes with a headcount plan the recruiting team can't keep up with. Roles sit open, roadmaps slip, and the board asks why.",
  },
  {
    Icon: Shield,
    stat: "HIPAA + AI",
    title:
      "They need engineers and product leaders who understand healthcare compliance and AI.",
    body: "HIPAA, FDA SaMD pathways, clinical validation, and production ML in one person. Few candidates have all of it, and the ones who do already have jobs.",
  },
  {
    Icon: Target,
    stat: "We do.",
    title: "Traditional recruiting doesn't reach these specialists. We do.",
    body: "These people don't apply to job posts or answer generic InMails. They reply to a pitch that shows you understand the systems they build.",
  },
];

const fadeItem = {
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function WhyHealthcare() {
  return (
    <section
      id="why-healthcare"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-accent">
          Why healthcare tech companies
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk">
          We picked one vertical and mapped all of it.
        </h2>
        <p className="mt-5 text-lg leading-relaxed text-chalk-muted">
          Generalist recruiters spread across every industry. We only work
          healthcare tech, and we start with AI diagnostics, where the hiring
          gap is widest.
        </p>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 lg:grid-cols-3">
        {REASONS.map(({ Icon, stat, title, body }) => (
          <motion.div
            key={stat}
            variants={fadeItem}
            className="group flex flex-col bg-ink-900 p-8 transition-colors hover:bg-ink-800 lg:p-10"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-7 w-7 text-chalk transition-colors group-hover:text-accent" />
              <span className="font-display text-3xl font-semibold tracking-tightest text-accent">
                {stat}
              </span>
            </div>
            <h3 className="mt-8 font-display text-xl font-medium leading-snug text-chalk">
              {title}
            </h3>
            <p className="mt-3 text-[15px] leading-relaxed text-chalk-muted">
              {body}
            </p>
          </motion.div>
        ))}
      </RevealGroup>
    </section>
  );
}
