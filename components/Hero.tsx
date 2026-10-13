"use client";

import { motion } from "framer-motion";
import DemoPanel from "./DemoPanel";
import { LEAD_MAGNET_URL, LEAD_MAGNET_EXTERNAL } from "@/lib/site";

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
            className="min-w-0"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.12 } } }}
          >
            <motion.div variants={item}>
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 px-3 py-1 text-xs text-chalk-muted">
                <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                Engineering recruiting for healthcare AI
              </span>
            </motion.div>

            <motion.h1
              variants={item}
              className="mt-7 font-display text-[clamp(2.75rem,6vw,5.25rem)] font-semibold leading-[0.98] tracking-tightest text-balance text-chalk"
            >
              Fill your AI diagnostics team 3x faster than traditional
              recruiting.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-8 max-w-xl text-lg leading-relaxed text-chalk-muted sm:text-xl"
            >
              We build your engineering and product hiring pipeline from
              Series B-D AI diagnostics companies. You get candidates who
              already ship clinical AI under HIPAA and FDA rules, not
              generalists you have to train.
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
                href={LEAD_MAGNET_URL}
                {...(LEAD_MAGNET_EXTERNAL && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
                className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 px-6 py-3.5 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-900"
              >
                Get the free companies list
                <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                  ↓
                </span>
              </a>
            </motion.div>

            <motion.p
              variants={item}
              className="mt-8 text-sm text-chalk-faint"
            >
              Plans from $299/mo. Each qualified candidate costs $15. No
              placement fees, no cut of first-year salary.
            </motion.p>
          </motion.div>

          {/* demo */}
          <div className="relative min-w-0">
            <DemoPanel />
          </div>
        </div>
      </div>
    </section>
  );
}
