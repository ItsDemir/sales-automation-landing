"use client";

import { Reveal } from "./motion";
import { Section, Eyebrow } from "./ui";
import BarChart from "./BarChart";
import {
  MARKET_SOURCES,
  FDA_AI_DEVICES_TOTAL,
  RADIOLOGY_SHARE,
  TOP_THREE_SHARE,
  AUTHORIZATIONS_PER_YEAR,
  AI_FUNDING_SHARE_2025,
  AI_FUNDING_SHARE_2024,
} from "@/lib/market-data";

/** Footnote marker that jumps to the matching source below. */
function Cite({ ids }: { ids: number[] }) {
  return (
    <sup className="ml-0.5 text-[0.7em] font-medium">
      {ids.map((id, i) => (
        <span key={id}>
          {i > 0 && ","}
          <a
            href={`#source-${id}`}
            className="text-primary-700 hover:underline"
            aria-label={`Source ${id}`}
          >
            {id}
          </a>
        </span>
      ))}
    </sup>
  );
}

export default function HiringGap() {
  return (
    <Section id="hiring-gap">
      <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr] lg:gap-16">
        <Reveal>
          <Eyebrow>Hiring gap</Eyebrow>
          <h2 className="mt-4 text-display-lg text-balance text-primary">
            AI diagnostics is shipping faster than ever.
          </h2>
          <div className="mt-10 border-l-2 border-accent pl-6">
            <p className="text-7xl font-bold tracking-tight text-ink">
              {FDA_AI_DEVICES_TOTAL.toLocaleString()}
            </p>
            <p className="mt-2 text-lg font-semibold text-ink">
              AI-enabled medical devices authorized by the FDA through 2025
              <Cite ids={[1, 2]} />
            </p>
          </div>
          <p className="mt-6 max-w-md leading-relaxed text-ink-muted">
            {RADIOLOGY_SHARE}% are radiology. Radiology, cardiology, and
            neurology together account for {TOP_THREE_SHARE}%
            <Cite ids={[1]} />. That is where the products are concentrated,
            and where we focus our mapping.
          </p>
          <p className="mt-4 max-w-md leading-relaxed text-ink-muted">
            The money follows: AI-enabled companies raised{" "}
            {AI_FUNDING_SHARE_2025}% of digital health venture funding in
            2025, up from {AI_FUNDING_SHARE_2024}% in 2024
            <Cite ids={[4]} />.
          </p>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="rounded-xl border border-line bg-surface p-6 shadow-card lg:p-8">
            <h3 className="text-base font-semibold text-ink">
              FDA authorizations of AI-enabled devices per year
            </h3>
            <p className="mt-1 text-sm text-ink-subtle">
              Yearly averages by period, and the 2025 total
            </p>
            <div className="mt-8">
              <BarChart
                title="FDA authorizations of AI-enabled devices per year"
                data={AUTHORIZATIONS_PER_YEAR}
              />
            </div>
            <p className="mt-6 border-t border-line pt-4 text-xs leading-relaxed text-ink-subtle">
              Source: analysis of the FDA AI-Enabled Medical Devices list, 1995
              to 2025, n = {FDA_AI_DEVICES_TOTAL.toLocaleString()}
              <Cite ids={[1, 3]} />. Counts vary slightly between analyses
              depending on when the list was downloaded.
            </p>
          </div>
        </Reveal>
      </div>

      <Reveal className="mt-14 border-t border-line pt-6">
        <p className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
          Sources
        </p>
        <ol className="mt-3 space-y-2">
          {MARKET_SOURCES.map((s) => (
            <li key={s.id} id={`source-${s.id}`} className="scroll-mt-24 text-xs leading-relaxed text-ink-subtle">
              <span className="font-semibold text-ink-muted">[{s.id}]</span>{" "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-line-strong underline-offset-2 transition-colors hover:text-primary-700 hover:decoration-primary-700"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </Section>
  );
}
