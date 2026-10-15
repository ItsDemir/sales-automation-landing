"use client";

import { Reveal } from "./motion";
import { Button } from "./ui";
import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  LEAD_MAGNET_URL,
  LEAD_MAGNET_EXTERNAL,
  LEAD_MAGNET_LABEL,
  LEAD_MAGNET_COUNT,
} from "@/lib/site";

/* Bookends the hero: same teal, same coral CTA. */
export default function CTA() {
  return (
    <section id="contact" className="bg-primary-700">
      <div className="mx-auto max-w-wide px-5 py-24 text-center sm:px-6 lg:px-10 lg:py-32">
        <Reveal>
          <h2 className="mx-auto max-w-3xl text-display-lg text-balance text-white">
            Ready to fill your engineering roles?
          </h2>
        </Reveal>

        <Reveal delay={0.1}>
          <p className="mx-auto mt-6 max-w-xl text-lead text-primary-50">
            Book a 30-minute demo. We&apos;ll show you the companies we&apos;ve
            mapped and the engineers we&apos;d pitch for your open roles.
          </p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <Button
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              variant="coral"
              size="lg"
            >
              Book a free demo
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
              {LEAD_MAGNET_LABEL}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.3}>
          <p className="mx-auto mt-8 max-w-xl text-sm leading-relaxed text-primary-100">
            The free list covers {LEAD_MAGNET_COUNT} Series B-D AI diagnostics
            companies we&apos;ve mapped. Questions?{" "}
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="font-medium text-white underline decoration-white/40 underline-offset-4 hover:decoration-white"
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
