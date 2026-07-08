"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Target, Pen, Send, Handshake } from "./icons";

const STEPS = [
  {
    n: "01",
    Icon: Target,
    title: "Find your prospects",
    body: "We pinpoint the exact decision-makers at the companies you want to reach. No scraped lists, no guessing — real people in your vertical.",
  },
  {
    n: "02",
    Icon: Pen,
    title: "Personalized outreach",
    body: "Every email speaks to the prospect's role and company. It reads like a human wrote it, because the message is built for one reader.",
  },
  {
    n: "03",
    Icon: Send,
    title: "We send & track",
    body: "We run the full sequence and monitor opens, clicks, and replies — then hand you the warm leads ready for a conversation.",
  },
  {
    n: "04",
    Icon: Handshake,
    title: "You focus on closing",
    body: "Your team gets back to what it does best: talking to interested buyers and closing deals. The admin work simply disappears.",
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
          Four steps from cold list to warm reply.
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
            <h3 className="mt-8 font-display text-2xl font-medium text-chalk">
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
