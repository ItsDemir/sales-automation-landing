"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Target, Pen, Send, Handshake } from "./icons";

const STEPS = [
  {
    n: "01",
    Icon: Target,
    title: "Map all AI diagnostics companies and their engineering org gaps",
    body: "We map every Series B-D AI diagnostics company: who runs each engineering and product team, which roles sit open, and where teams are stretched thin. You see exactly where the talent is.",
  },
  {
    n: "02",
    Icon: Pen,
    title: "Write recruiting pitches that speak to engineers at these companies",
    body: "Each pitch is written for one engineer. It names their team, their stack, and the problem your role solves, in language that lands with people who build regulated clinical AI.",
  },
  {
    n: "03",
    Icon: Send,
    title: "We send & track",
    body: "We run the full sequence from authenticated, warmed-up domains and monitor opens, clicks, and replies. Then we hand you the candidates who want to talk.",
  },
  {
    n: "04",
    Icon: Handshake,
    title: "You focus on closing engineering hires",
    body: "Your team spends its time on interviews and offers. Sourcing, outreach, and follow-up are already done.",
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

export default function HowItWorks() {
  return (
    <section id="how" className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36">
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-accent">
          How it works
        </p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk">
          Four steps from org chart to signed offer.
        </h2>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-2">
        {STEPS.map(({ n, Icon, title, body }) => (
          <motion.div
            key={n}
            variants={fadeItem}
            className="group flex flex-col bg-ink-900 p-8 transition-colors hover:bg-ink-800 lg:p-10"
          >
            <div className="flex items-center justify-between">
              <Icon className="h-7 w-7 text-chalk transition-colors group-hover:text-accent" />
              <span className="font-display text-sm text-chalk-faint">{n}</span>
            </div>
            <h3 className="mt-8 font-display text-2xl font-medium leading-snug text-chalk">
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
