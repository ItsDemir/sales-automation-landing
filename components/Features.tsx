"use client";

import { motion } from "framer-motion";
import { Bolt, Layers, Chart, Filter } from "./icons";
import {
  SpeedVisual,
  AdminVisual,
  ReportVisual,
  QualifiedVisual,
} from "./FeatureVisuals";

const EASE = [0.16, 1, 0.3, 1] as const;

const FEATURES = [
  {
    Icon: Bolt,
    kicker: "Speed",
    title: "10× faster campaigns",
    body: "What takes an internal team weeks, we ship in days. Momentum runs research, writing, and sending in parallel so your pipeline never waits on a to-do list.",
    Visual: SpeedVisual,
  },
  {
    Icon: Layers,
    kicker: "Effort",
    title: "Zero admin work",
    body: "No more hunting contacts, writing one-off emails, or copying replies into a spreadsheet. We own the busywork end-to-end — you just take the meetings.",
    Visual: AdminVisual,
  },
  {
    Icon: Chart,
    kicker: "Clarity",
    title: "Full visibility",
    body: "Every week you get a clean read on opens, clicks, replies, and qualified leads. No black box — you always know exactly what your outreach is producing.",
    Visual: ReportVisual,
  },
  {
    Icon: Filter,
    kicker: "Precision",
    title: "Qualified leads only",
    body: "Real decision-makers in your vertical, not a random list. We filter hard so the replies that reach you are worth your team's time.",
    Visual: QualifiedVisual,
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-sm uppercase tracking-widest text-accent"
        >
          Why Momentum
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk"
        >
          Results your sales team will feel.
        </motion.h2>
      </div>

      <div className="mt-20 space-y-24 lg:space-y-32">
        {FEATURES.map(({ Icon, kicker, title, body, Visual }, i) => {
          const flipped = i % 2 === 1;
          return (
            <div
              key={title}
              className="grid items-center gap-10 lg:grid-cols-2 lg:gap-16"
            >
              {/* copy */}
              <motion.div
                initial={{ opacity: 0, x: flipped ? 40 : -40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE }}
                className={flipped ? "lg:order-2" : ""}
              >
                <div className="flex items-center gap-3">
                  <Icon className="h-6 w-6 text-accent" />
                  <span className="text-xs uppercase tracking-widest text-chalk-muted">
                    {kicker}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-[clamp(1.75rem,3.5vw,2.75rem)] font-medium leading-tight tracking-tightest text-chalk">
                  {title}
                </h3>
                <p className="mt-5 max-w-md text-lg leading-relaxed text-chalk-muted">
                  {body}
                </p>
              </motion.div>

              {/* visual */}
              <motion.div
                initial={{ opacity: 0, x: flipped ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.9, ease: EASE, delay: 0.08 }}
                className={flipped ? "lg:order-1" : ""}
              >
                <Visual />
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
