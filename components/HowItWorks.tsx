"use client";

import { RevealGroup, motion } from "./motion";
import { Section, SectionHeading } from "./ui";
import { MapFold, Pitch, SendTrack, Hire } from "./icons";

/* Teal carries the eye through steps 1-3; green marks the hire. */
const STEPS = [
  {
    n: "01",
    Icon: MapFold,
    verb: "Map",
    title: "Map all AI diagnostics companies and their engineering org gaps",
    body: "We chart each Series B-D company's engineering and product teams, who leads them, and which roles sit open.",
    tone: "teal",
  },
  {
    n: "02",
    Icon: Pitch,
    verb: "Pitch",
    title: "Write recruiting pitches that speak to engineers at these companies",
    body: "Each pitch names the engineer's team, stack, and the problem your role solves. Written for people who build regulated clinical AI.",
    tone: "teal",
  },
  {
    n: "03",
    Icon: SendTrack,
    verb: "Send",
    title: "We send & track",
    body: "We run the sequence from authenticated domains and track every reply. Interested candidates go straight to you.",
    tone: "teal",
  },
  {
    n: "04",
    Icon: Hire,
    verb: "Hire",
    title: "You focus on closing engineering hires",
    body: "Your team runs interviews and makes offers. Sourcing and follow-up are already done.",
    tone: "green",
  },
] as const;

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function HowItWorks() {
  return (
    <Section id="how" tone="surface">
      <SectionHeading eyebrow="How it works" title="Four steps from org chart to signed offer.">
        Mapping, pitching, and sending are on us. Hiring decisions stay with
        you.
      </SectionHeading>

      <RevealGroup className="relative mt-16 grid gap-10 md:grid-cols-2 lg:grid-cols-4 lg:gap-8">
        {/* connector: teal through step 3, green into the hire */}
        <div aria-hidden className="absolute left-7 top-[27px] hidden h-0.5 w-[calc(52%-1.75rem)] bg-primary/40 lg:block" />
        <div aria-hidden className="absolute left-[52%] top-[27px] hidden h-0.5 w-[26%] bg-secondary lg:block" />

        {STEPS.map(({ n, Icon, verb, title, body, tone }) => {
          const green = tone === "green";
          return (
            <motion.div key={n} variants={fadeItem} className="relative">
              <div
                className={`relative flex h-14 w-14 items-center justify-center rounded-xl border ${
                  green
                    ? "border-secondary/40 bg-secondary-50 text-secondary-700"
                    : "border-primary/30 bg-primary-50 text-primary-700"
                }`}
              >
                <Icon className="h-7 w-7" />
              </div>
              <p
                className={`mt-6 text-xs font-semibold uppercase tracking-[0.12em] ${
                  green ? "text-secondary-700" : "text-primary-700"
                }`}
              >
                {n} {verb}
              </p>
              <h3 className="mt-2 text-lg font-semibold leading-snug text-ink">{title}</h3>
              <p className="mt-3 leading-relaxed text-ink-muted">{body}</p>
            </motion.div>
          );
        })}
      </RevealGroup>
    </Section>
  );
}
