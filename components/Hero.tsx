"use client";

import { motion } from "framer-motion";
import HeroNetwork from "./HeroNetwork";
import { Button } from "./ui";
import { LEAD_MAGNET_URL, LEAD_MAGNET_EXTERNAL } from "@/lib/site";

const EASE = [0.16, 1, 0.3, 1] as const;

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

/* Hero sits on teal 700, not 600: white body text needs 4.5:1. */
export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-primary-700">
      <div className="mx-auto max-w-wide px-5 pb-20 pt-32 sm:px-6 lg:px-10 lg:pb-28 lg:pt-40">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <motion.div
            className="min-w-0"
            initial="hidden"
            animate="show"
            variants={{ show: { transition: { staggerChildren: 0.1 } } }}
          >
            <motion.p
              variants={item}
              className="inline-flex items-center gap-2 rounded-md bg-white/10 px-3 py-1.5 text-sm font-medium text-primary-50"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-secondary" />
              Engineering recruiting for AI diagnostics
            </motion.p>

            <motion.h1
              variants={item}
              className="mt-6 text-display-xl text-balance text-white"
            >
              Fill your AI diagnostics team 3x faster than traditional
              recruiting.
            </motion.h1>

            <motion.p
              variants={item}
              className="mt-6 max-w-xl text-lead text-primary-50"
            >
              We build your engineering and product hiring pipeline from
              Series B-D AI diagnostics companies. Candidates who already ship
              clinical AI, not generalists you have to train.
            </motion.p>

            <motion.div
              variants={item}
              className="mt-9 flex flex-col gap-3 sm:flex-row"
            >
              <Button href="#contact" variant="coral" size="lg">
                Book a demo
                <span aria-hidden className="transition-transform group-hover:translate-x-0.5">
                  →
                </span>
              </Button>
              <Button
                href={LEAD_MAGNET_URL}
                variant="outline-light"
                size="lg"
                {...(LEAD_MAGNET_EXTERNAL && {
                  target: "_blank",
                  rel: "noopener noreferrer",
                })}
              >
                Get the free companies list
              </Button>
            </motion.div>

            <motion.p variants={item} className="mt-6 text-sm text-primary-100">
              Plans from $299/mo. Each qualified candidate costs $15. No
              placement fees.
            </motion.p>
          </motion.div>

          <motion.div
            className="mx-auto w-full min-w-0 max-w-[480px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1.2, delay: 0.3 }}
          >
            <HeroNetwork />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
