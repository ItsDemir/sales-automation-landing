"use client";

import { Reveal } from "./motion";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-grid">
      <div className="mx-auto max-w-wide px-6 py-32 text-center lg:px-10 lg:py-44">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tightest text-balance text-chalk">
            Ready to stop wasting time on outreach?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-chalk-muted">
            Book a 20-minute demo and we&apos;ll show you exactly how Momentum
            builds pipeline for a team like yours.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="https://calendly.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center justify-center gap-2 rounded-full bg-accent px-8 py-4 text-sm font-medium text-ink-900 transition-colors hover:bg-accent-soft"
            >
              Book a free demo
              <span className="transition-transform duration-300 group-hover:translate-x-0.5">
                →
              </span>
            </a>
            <a
              href="mailto:dirikdusa@gmail.com"
              className="inline-flex items-center justify-center rounded-full border border-white/20 px-8 py-4 text-sm font-medium text-chalk transition-colors hover:border-white/40"
            >
              Email us instead
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
