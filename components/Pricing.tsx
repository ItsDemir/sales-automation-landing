"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { STRIPE_PILOT_URL, PILOT_PRICE } from "@/lib/site";

const PLANS = [
  {
    name: "Starter",
    price: "$750",
    period: "/mo",
    priceNote: "billed monthly · cancel anytime",
    desc: "Test the model with your first campaign.",
    features: [
      "50–75 prospects",
      "Personalized emails",
      "Campaign management & sending",
      "Weekly reports",
    ],
    featured: false,
  },
  {
    name: "Professional",
    price: "$1,750",
    period: "/mo",
    priceNote: "billed monthly · cancel anytime",
    desc: "The sweet spot for consistent pipeline.",
    features: [
      "100–150 prospects",
      "Deep personalization",
      "Multi-touch sequences",
      "Bi-weekly reports",
      "Strategy consultation",
    ],
    featured: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "",
    priceNote: "from ~$3,500/mo",
    desc: "Large-scale, always-on outreach.",
    features: [
      "150+ prospects / month",
      "Custom targeting",
      "Ongoing campaigns",
      "Weekly + custom reports",
      "Dedicated support",
    ],
    featured: false,
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
          Built to scale with your pipeline.
        </h2>
        <p className="mt-5 text-lg text-chalk-muted">
          Straightforward monthly plans that scale with campaign size and
          cadence. Prices are starting points — book a demo and we&apos;ll size
          it to your team.
        </p>
      </Reveal>

      <RevealGroup className="mt-16 grid gap-6 lg:grid-cols-3">
        {PLANS.map((plan) => (
          <motion.div
            key={plan.name}
            variants={fadeItem}
            className={`flex flex-col rounded-2xl border p-8 transition-colors ${
              plan.featured
                ? "border-accent/60 bg-ink-800"
                : "border-white/10 bg-ink-900 hover:border-white/25"
            }`}
          >
            <div className="flex items-center justify-between">
              <h3 className="font-display text-xl font-medium text-chalk">
                {plan.name}
              </h3>
              {plan.featured && (
                <span className="rounded-full border border-accent px-3 py-1 text-xs text-accent">
                  Most popular
                </span>
              )}
            </div>
            <p className="mt-3 text-sm text-chalk-muted">{plan.desc}</p>

            <div className="mt-6 flex items-baseline gap-1">
              <span className="font-display text-4xl font-semibold tracking-tightest text-chalk">
                {plan.price}
              </span>
              {plan.period && (
                <span className="text-sm text-chalk-muted">{plan.period}</span>
              )}
            </div>
            <p className="mt-1 text-xs text-chalk-faint">{plan.priceNote}</p>

            <ul className="mt-8 space-y-3 border-t border-white/10 pt-8">
              {plan.features.map((f) => (
                <li key={f} className="flex items-start gap-3 text-sm text-chalk">
                  <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-accent" />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href="#contact"
              className={`mt-8 inline-flex items-center justify-center rounded-full px-5 py-3 text-sm font-medium transition-colors ${
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
        <div className="flex flex-col items-start gap-4 rounded-2xl border border-white/10 bg-ink-800 p-6 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-chalk-muted">
            Not ready for a monthly plan?{" "}
            <span className="text-chalk">
              Start with a one-time {PILOT_PRICE} pilot
            </span>{" "}
            — a full campaign, no commitment.
          </p>
          <a
            href={STRIPE_PILOT_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex shrink-0 items-center justify-center gap-2 rounded-full border border-accent/50 px-5 py-3 text-sm font-medium text-accent transition-colors hover:bg-accent hover:text-ink-900"
          >
            Start a pilot — {PILOT_PRICE}
            <span className="transition-transform duration-300 group-hover:translate-x-0.5">
              →
            </span>
          </a>
        </div>
      </Reveal>
    </section>
  );
}
