"use client";

import { Reveal } from "./motion";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  LEAD_MAGNET_URL,
  LEAD_MAGNET_EXTERNAL,
  LEAD_MAGNET_LABEL,
  LEAD_MAGNET_COUNT,
} from "@/lib/site";

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden bg-grid">
      <div className="mx-auto max-w-wide px-6 py-32 text-center lg:px-10 lg:py-44">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-[clamp(2.5rem,7vw,6rem)] font-semibold leading-[0.98] tracking-tightest text-balance text-chalk">
            Ready to fill your engineering roles?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-8 max-w-xl text-lg text-chalk-muted">
            Book a 30-minute demo. We&apos;ll show you the AI diagnostics
            companies we&apos;ve mapped and the engineers we&apos;d pitch for
            your open roles.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={CALENDLY_URL}
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
              href={LEAD_MAGNET_URL}
              {...(LEAD_MAGNET_EXTERNAL && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="group inline-flex items-center justify-center gap-2 rounded-full border border-accent/50 px-8 py-4 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-900"
            >
              {LEAD_MAGNET_LABEL}
              <span className="transition-transform duration-300 group-hover:translate-y-0.5">
                ↓
              </span>
            </a>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-chalk-faint">
            Not ready for a call? The free list covers {LEAD_MAGNET_COUNT}{" "}
            Series B-D AI diagnostics companies we&apos;ve already mapped.
            Questions?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-chalk-muted underline decoration-white/20 underline-offset-2 transition-colors hover:text-chalk"
            >
              Email us
            </a>
            .
          </p>
        </Reveal>
      </div>
    </section>
  );
}
