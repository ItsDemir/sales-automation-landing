"use client";

import { motion } from "framer-motion";
import DemoPanel from "./DemoPanel";

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.9, ease: EASE } },
};

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-grid">
      {/* top glow-free vignette: flat radial mask via layered borders */}
      <div className="mx-auto max-w-wide px-6 pb-24 pt-36 lg:px-10 lg:pb-32 lg:pt-44">
        <div className="grid items-center gap-16 lg:grid-cols-[1.05fr_0.95fr] lg:gap-12">
          {/* copy */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-chalk-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Autonomous outbound, done for you
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-[clamp(3rem,8.5vw,7.5rem)] font-semibold leading-[0.95] tracking-tightest text-balance text-chalk"
            >
              Stop losing deals to slow outreach.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-muted sm:text-xl"
            >
              Momentum finds your prospects, drafts outreach that reads like you
              wrote it, and runs the whole campaign — so your team spends its
              hours closing, not chasing.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <a
                href="#contact"
                className="group inline-flex items-center justify-center gap-2 rounded-full bg-chalk px-6 py-3.5 text-sm font-medium text-ink-900 transition-colors hover:bg-accent"
              >
                Book a demo
                <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                  →
                </span>
              </a>
              <a
                href="#how"
                className="inline-flex items-center justify-center rounded-full border border-white/20 px-6 py-3.5 text-sm font-medium text-chalk transition-colors hover:border-white/40"
              >
                See how it works
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 text-sm text-chalk-faint"
            >
              No new tools to learn. We run it end-to-end and report back weekly.
            </motion.p>
          </motion.div>

          {/* demo */}
          <div className="relative">
            <DemoPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
