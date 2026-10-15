"use client";

import { Reveal } from "./motion";
import { Section, Eyebrow } from "./ui";
import BarChart from "./BarChart";
import {
  COMPANIES_MAPPED,
  OPEN_ROLES_LABEL,
  ROLES_PER_COMPANY_LABEL,
  ROLES_BY_FUNCTION,
  RESEARCH_SOURCE,
} from "@/lib/research";

export default function HiringGap() {
  return (
    <Section id="hiring-gap">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Hiring gap</Eyebrow>
          <h2 className="mt-4 text-display-lg text-balance text-primary">
            The gap is measurable.
          </h2>
          <div className="mt-10 border-l-2 border-accent pl-6">
            <p className="text-7xl font-bold tracking-tight text-ink">
              {ROLES_PER_COMPANY_LABEL}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              open engineering roles per company, on average
            </p>
          </div>
          <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
            Across the {COMPANIES_MAPPED} AI diagnostics companies we&apos;ve
            mapped, {OPEN_ROLES_LABEL} engineering and product roles are open.
            Here is where they sit.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-surface p-6 shadow-card lg:p-8">
            <h3 className="text-base font-semibold text-ink">Open roles by function</h3>
            <p className="mt-1 text-sm text-ink-subtle">
              Summed across {COMPANIES_MAPPED} Series B-D AI diagnostics companies
            </p>
            <div className="mt-8">
              <BarChart
                title="Open roles by function"
                data={ROLES_BY_FUNCTION}
                showShare
              />
            </div>
            <p className="mt-6 border-t border-line pt-4 text-xs text-ink-subtle">
              {RESEARCH_SOURCE}
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
