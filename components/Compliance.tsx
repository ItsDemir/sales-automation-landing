"use client";

import { Reveal } from "./motion";
import { Lock, Check } from "./icons";

/* Deliberately quiet: one row, no imagery. Says "HIPAA-aware", not
   "HIPAA-compliant": Momentum never handles patient data. */
const POINTS = [
  "No patient data (PHI), ever",
  "Authenticated sending domains",
  "Opt-out on every message",
];

export default function Compliance() {
  return (
    <section aria-label="Healthcare data practices" className="bg-canvas">
      <div className="mx-auto max-w-wide px-5 pb-24 sm:px-6 lg:px-10 lg:pb-32">
        <Reveal>
          <div className="flex flex-col gap-6 rounded-xl border border-line bg-surface p-6 lg:flex-row lg:items-center lg:gap-10 lg:p-8">
            <div className="flex items-start gap-4">
              <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-primary-50 text-primary-700">
                <Lock className="h-5 w-5" />
              </span>
              <div>
                <p className="font-semibold text-ink">
                  We handle healthcare data properly.
                </p>
                <p className="mt-1 max-w-xl text-ink-muted">
                  HIPAA-aware research and secure outreach. We map companies and
                  professional profiles, never patient records.
                </p>
              </div>
            </div>
            <ul className="flex flex-col gap-2.5 lg:ml-auto lg:shrink-0">
              {POINTS.map((p) => (
                <li key={p} className="flex items-center gap-2 text-sm text-ink-muted">
                  <Check className="h-4 w-4 text-secondary-600" strokeWidth={2} />
                  {p}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
