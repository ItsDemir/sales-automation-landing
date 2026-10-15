"use client";

import { useState } from "react";
import { Reveal } from "./motion";
import { Section, SectionHeading, StatusChip, QualifiedBadge, type ReplyStatus } from "./ui";

/* An example hiring dashboard. Roles and company types only: no
   invented people and no real company names. */
type Candidate = {
  role: string;
  company: string;
  team: string;
  status: ReplyStatus;
  qualified: boolean;
};

const CANDIDATES: Candidate[] = [
  {
    role: "Senior ML Engineer",
    company: "Series C radiology AI",
    team: "Imaging models team, 6 engineers. Shipped an FDA-cleared detection model.",
    status: "Interested",
    qualified: true,
  },
  {
    role: "Staff ML Engineer",
    company: "Series D cardiology AI",
    team: "Led ECG model validation for a 510(k) submission.",
    status: "Replied",
    qualified: true,
  },
  {
    role: "MLOps Engineer",
    company: "Series B pathology AI",
    team: "Built HIPAA-scoped training infrastructure on AWS.",
    status: "Interested",
    qualified: true,
  },
  {
    role: "Head of Product",
    company: "Series C ophthalmology AI",
    team: "Owns the clinician-facing screening workflow.",
    status: "Replied",
    qualified: false,
  },
  {
    role: "Principal Engineer",
    company: "Series D diagnostics platform",
    team: "Platform lead for 12 engineers. SOC 2 and HIPAA scope.",
    status: "Queued",
    qualified: false,
  },
  {
    role: "Senior Data Engineer",
    company: "Series B radiology AI",
    team: "DICOM ingestion pipelines and de-identification.",
    status: "Queued",
    qualified: false,
  },
];

const FILTERS = [
  { key: "all", label: "All", test: () => true },
  { key: "qualified", label: "Qualified", test: (c: Candidate) => c.qualified },
  { key: "interested", label: "Interested", test: (c: Candidate) => c.status === "Interested" },
  { key: "replied", label: "Replied", test: (c: Candidate) => c.status === "Replied" },
] as const;

const count = (f: (c: Candidate) => boolean) => CANDIDATES.filter(f).length;

const TILES = [
  { label: "In pipeline", value: CANDIDATES.length, dot: "bg-ink-faint" },
  { label: "Qualified", value: count((c) => c.qualified), dot: "bg-accent" },
  { label: "Interested", value: count((c) => c.status === "Interested"), dot: "bg-secondary" },
  { label: "Replied", value: count((c) => c.status === "Replied"), dot: "bg-primary" },
];

export default function Pipeline() {
  const [filter, setFilter] = useState<(typeof FILTERS)[number]["key"]>("all");
  const active = FILTERS.find((f) => f.key === filter)!;
  const rows = CANDIDATES.filter(active.test);

  return (
    <Section id="pipeline">
      <SectionHeading
        eyebrow="Qualified candidate pipeline"
        title="Every candidate, their team, and where they stand."
      >
        Your pipeline shows who we reached, what they work on today, and
        whether they replied. Qualified candidates are flagged so you know
        where to spend interview time.
      </SectionHeading>

      <Reveal className="mt-14">
        <div className="overflow-hidden rounded-xl border border-line bg-surface shadow-card">
          {/* header */}
          <div className="flex flex-wrap items-center justify-between gap-3 border-b border-line px-5 py-4 lg:px-6">
            <div>
              <p className="text-base font-semibold text-ink">ML Platform hiring</p>
              <p className="text-sm text-ink-subtle">Senior engineering roles</p>
            </div>
            <span className="rounded-md border border-line px-2.5 py-1 text-xs font-medium text-ink-subtle">
              Example pipeline
            </span>
          </div>

          {/* stat tiles */}
          <div className="grid grid-cols-2 border-b border-line sm:grid-cols-4">
            {TILES.map((t, i) => (
              <div
                key={t.label}
                className={`px-5 py-4 lg:px-6 ${i % 2 ? "border-l border-line" : ""} ${
                  i > 1 ? "border-t border-line sm:border-t-0" : ""
                } ${i === 2 ? "sm:border-l" : ""}`}
              >
                <p className="flex items-center gap-2 text-sm text-ink-subtle">
                  <span className={`h-2 w-2 rounded-full ${t.dot}`} />
                  {t.label}
                </p>
                <p className="mt-1 text-3xl font-bold tracking-tight text-ink">{t.value}</p>
              </div>
            ))}
          </div>

          {/* filter row */}
          <div className="flex flex-wrap gap-2 border-b border-line px-5 py-3 lg:px-6" role="group" aria-label="Filter candidates">
            {FILTERS.map((f) => {
              const on = f.key === filter;
              return (
                <button
                  key={f.key}
                  type="button"
                  onClick={() => setFilter(f.key)}
                  aria-pressed={on}
                  className={`rounded-md px-3 py-1.5 text-sm font-medium transition-colors ${
                    on
                      ? "bg-primary-700 text-white"
                      : "text-ink-muted hover:bg-slate-100 hover:text-ink"
                  }`}
                >
                  {f.label}
                  <span className={`ml-1.5 tabular-nums ${on ? "text-primary-100" : "text-ink-faint"}`}>
                    {count(f.test)}
                  </span>
                </button>
              );
            })}
          </div>

          {/* column headings */}
          <div className="hidden grid-cols-[1.1fr_1fr_1.7fr_8rem] gap-6 border-b border-line bg-canvas px-6 py-2.5 text-xs font-semibold uppercase tracking-[0.08em] text-ink-subtle md:grid">
            <span>Candidate role</span>
            <span>Current company</span>
            <span>Team context</span>
            <span>Status</span>
          </div>

          <ul>
            {rows.map((c) => (
              <li
                key={c.role}
                className="grid gap-2 border-b border-line px-5 py-4 last:border-b-0 md:grid-cols-[1.1fr_1fr_1.7fr_8rem] md:items-center md:gap-6 lg:px-6"
              >
                <div className="flex flex-wrap items-center gap-2">
                  <span className="font-semibold text-ink">{c.role}</span>
                  {c.qualified && <QualifiedBadge />}
                </div>
                <span className="text-sm text-ink-muted">{c.company}</span>
                <span className="text-sm leading-relaxed text-ink-muted">{c.team}</span>
                <span>
                  <StatusChip status={c.status} />
                </span>
              </li>
            ))}
          </ul>
        </div>
      </Reveal>
    </Section>
  );
}
