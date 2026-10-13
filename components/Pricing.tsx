"use client";

import { Reveal, RevealGroup, motion } from "./motion";

/* Starter and Enterprise are paused while we focus on healthcare tech.
   Their last copy is in git history (commit 2e5c980). */
const PLANS = [
  {
    name: "Data Feed Only",
    price: "$299",
    period: "/mo",
    usage: "",
    priceNote: "billed monthly, cancel anytime",
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
    price: "$1,500",
    period: "/mo",
    usage: "+ $15 per qualified candidate pipeline contact",
    priceNote: "billed monthly, cancel anytime",
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
  hidden: { opacity: 0, y: 28 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
  },
};

export default function Pricing() {
  return (
    <section
      id="pricing"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      <Reveal className="max-w-2xl">
        <p className="text-sm uppercase tracking-widest text-accent">Pricing</p>
        <h2 className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk">
          Only pay for results.
        </h2>
        <p className="mt-5 text-lg text-chalk-muted">
          Each qualified candidate added to your pipeline costs $15. No
          placement fees and no percentage of salary, so a senior hire costs
          you the same as a junior one.
        </p>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-2">
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeItem}
            className={`flex flex-col rounded-2xl border p-8 transition-colors lg:p-10 ${
              plan.featured
                ? "border-accent/60 bg-ink-800"
                : "border-white/10 bg-ink-900 hover:border-white/25"
            }`}
          >
            <div className="flex items-center justify-between gap-4">
              <h3 className="font-display text-xl font-medium text-chalk">
                {plan.name}
              </h3>
              {plan.featured && (
                <span className="rounded-full border border-accent px-3 py-1 text-xs text-accent">
                  Full service
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-chalk-muted">{plan.desc}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold tracking-tightest text-chalk">
                {plan.price}
              </span>
              <span className="text-sm text-chalk-muted">{plan.period}</span>
            </div>
            {plan.usage && (
              <p className="mt-2 font-display text-lg font-medium text-accent">
                {plan.usage}
              </p>
            )}
            <p className="mt-1 text-xs text-chalk-faint">{plan.priceNote}</p>

            <ul className="mt-8 flex-1 space-y-3 border-t border-white/10 pt-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-chalk">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
              {plan.excluded && (
                <li className="flex items-start gap-3 text-sm text-chalk-faint">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-chalk-faint" />
                  {plan.excluded}
                </li>
              )}
            </ul>

            <a
              href="#contact"
              className={`mt-10 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${
                plan.featured
                  ? "bg-accent text-ink-900 hover:bg-accent-soft"
                  : "border border-white/20 text-chalk hover:border-white/40"
              }`}
            >
              Book a demo
            </a>
          </motion.div>
        ))}
      </RevealGroup>

      <Reveal className="mt-10" delay={0.1}>
        <div className="rounded-2xl border border-white/10 bg-ink-800 p-6 lg:p-8">
          <p className="font-display text-xl font-medium text-chalk">
            What counts as qualified?
          </p>
          <p className="mt-3 max-w-3xl text-sm leading-relaxed text-chalk-muted">
            You set the bar when we scope your roles together: experience,
            domain, seniority, and location. Candidates who don&apos;t meet it
            never reach your invoice.
          </p>
        </div>
      </Reveal>
    </section>
  );
}
