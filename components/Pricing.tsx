"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Section, SectionHeading, Button } from "./ui";
import { Check } from "./icons";

/* Starter and Enterprise are paused while we focus on healthcare tech.
   Their last copy is in git history (commit 2e5c980).

   Data Feed Only gets the lighter treatment (lean, flexible).
   Professional gets the teal frame and green accents (full service). */
const PLANS = [
  {
    name: "Data Feed Only",
    tag: "Lean, flexible",
    price: "$299",
    period: "/mo",
    usage: "",
    priceNote: "Billed monthly. Cancel anytime.",
    desc: "Just the research. Your team runs the outreach.",
    features: [
      "Company list: Series B-D AI diagnostics",
      "Engineering and product org charts",
      "Hiring gaps by team",
      "Decision-makers",
      "Verified emails",
    ],
    excluded: "No outreach service",
    featured: false,
  },
  {
    name: "Professional",
    tag: "Full service, turnkey",
    price: "$1,500",
    period: "/mo",
    usage: "+ $15 per qualified candidate pipeline contact",
    priceNote: "Billed monthly. Cancel anytime.",
    desc: "Research, pitches, sending, and tracking. You interview and hire.",
    features: [
      "Everything in Data Feed Only",
      "Recruiting pitches written for each engineer",
      "Multi-touch sequences, sent and tracked",
      "Qualified candidates added to your pipeline",
      "Bi-weekly pipeline reports",
      "Hiring strategy consultation",
    ],
    excluded: "",
    featured: true,
  },
];

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

export default function Pricing() {
  return (
    <Section id="pricing">
      <SectionHeading eyebrow="Pricing" title="Only pay for results.">
        Each qualified candidate added to your pipeline costs $15. No placement
        fees and no percentage of salary.
      </SectionHeading>

      <RevealGroup className="mt-14 grid items-start gap-6 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeItem}
            className={`flex h-full flex-col overflow-hidden rounded-xl bg-surface ${
              plan.featured
                ? "border-2 border-primary shadow-card"
                : "border border-line"
            }`}
          >
            {/* green bar on Professional; matching spacer keeps headings level */}
            <div aria-hidden className={plan.featured ? "h-1.5 bg-secondary" : "h-[7px]"} />
            <div className="flex flex-1 flex-col p-7 lg:p-9">
              <div className="flex flex-wrap items-center justify-between gap-3">
                <h3 className="text-xl font-semibold text-ink">{plan.name}</h3>
                <span
                  className={`rounded-md px-2.5 py-1 text-xs font-semibold ${
                    plan.featured
                      ? "bg-secondary-50 text-secondary-700"
                      : "bg-slate-100 text-ink-muted"
                  }`}
                >
                  {plan.tag}
                </span>
              </div>
              <p className="mt-2 text-ink-muted">{plan.desc}</p>

              <div className="mt-7 flex items-baseline gap-1">
                <span className="text-5xl font-bold tracking-tight text-ink">{plan.price}</span>
                <span className="text-ink-subtle">{plan.period}</span>
              </div>
              {plan.usage && (
                <p className="mt-2 text-lg font-semibold text-secondary-700">{plan.usage}</p>
              )}
              <p className="mt-1 text-sm text-ink-subtle">{plan.priceNote}</p>

              <ul className="mt-8 flex-1 space-y-3 border-t border-line pt-8">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-ink">
                    <Check
                      className={`mt-0.5 h-5 w-5 shrink-0 ${
                        plan.featured ? "text-secondary-600" : "text-ink-faint"
                      }`}
                      strokeWidth={2}
                    />
                    {f}
                  </li>
                ))}
                {plan.excluded && (
                  <li className="flex items-start gap-3 text-ink-subtle">
                    <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center">
                      <span className="h-px w-3 bg-ink-faint" />
                    </span>
                    {plan.excluded}
                  </li>
                )}
              </ul>

              <Button
                href="#contact"
                variant={plan.featured ? "primary" : "outline"}
                size="lg"
                className="mt-10"
              >
                Book a demo
              </Button>
            </div>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mt-6" delay={0.1}>
        <div className="rounded-xl border border-line bg-surface p-6 lg:p-7">
          <p className="font-semibold text-ink">What counts as qualified?</p>
          <p className="mt-2 max-w-3xl text-ink-muted">
            You set the bar when we scope your roles together: experience,
            domain, seniority, and location. Candidates who don&apos;t meet it
            never reach your invoice.
          </p>
        </div>
      </Reveal>
    </Section>
  );
}
