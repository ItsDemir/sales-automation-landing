"use client";

import { useId, useState } from "react";
import { motion } from "./motion";

/* ------------------------------------------------------------------ *
 * Horizontal bar chart, the one chart form on the site.
 *
 * Marks: coral (accent) bars, 20px thick, 4px rounded data end, square
 * at the baseline. Muted bars use slate for de-emphasis. Axis labels
 * are teal; values sit at the bar tip in ink. Coral is under 3:1 on
 * the surface, so every bar is direct-labeled and a table view exists.
 * Hover or focus a row for its share of the total.
 * ------------------------------------------------------------------ */

const EASE = [0.16, 1, 0.3, 1] as const;
/* Bars and ticks use 86% of the track; the rest is the value gutter. */
const PLOT = 0.86;

export type Bar = {
  label: string;
  value: number;
  muted?: boolean;
};

/* Round the tick step to 1, 2, or 5 times a power of ten. */
function niceStep(max: number, ticks: number) {
  const raw = max / ticks;
  const pow = Math.pow(10, Math.floor(Math.log10(raw)));
  const m = raw / pow;
  return (m <= 1 ? 1 : m <= 2 ? 2 : m <= 5 ? 5 : 10) * pow;
}

export default function BarChart({
  data,
  title,
  unit = "",
  ticks = 4,
  showShare = false,
  shareLabel = "of the total",
}: {
  data: Bar[];
  title: string;
  unit?: string;
  ticks?: number;
  showShare?: boolean;
  shareLabel?: string;
}) {
  const [active, setActive] = useState<number | null>(null);
  const [table, setTable] = useState(false);
  const tableId = useId();
  const step = niceStep(Math.max(...data.map((d) => d.value)), ticks);
  const max = Math.ceil(Math.max(...data.map((d) => d.value)) / step) * step;
  const total = data.reduce((n, d) => n + d.value, 0);
  const tickValues = Array.from({ length: Math.round(max / step) + 1 }, (_, i) => i * step);
  const fmt = (v: number) => `${v.toLocaleString()}${unit}`;

  return (
    <figure>
      <figcaption className="sr-only">{title}</figcaption>

      {!table && (
        <div className="relative">
          <div className="space-y-4">
            {data.map((d, i) => {
              const pct = (d.value / max) * 100 * PLOT;
              return (
                <div
                  key={d.label}
                  tabIndex={0}
                  onPointerEnter={() => setActive(i)}
                  onPointerLeave={() => setActive(null)}
                  onFocus={() => setActive(i)}
                  onBlur={() => setActive(null)}
                  aria-label={`${d.label}: ${fmt(d.value)}`}
                  className="relative grid grid-cols-1 gap-1.5 rounded-md outline-none focus-visible:ring-2 focus-visible:ring-primary sm:grid-cols-[11.5rem_1fr] sm:items-center sm:gap-4"
                >
                  <span className="text-sm font-medium text-primary-700">{d.label}</span>

                  {/* Observe the full-width track: a zero-width bar near the
                      left edge never intersects the inset viewport on phones. */}
                  <motion.div
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true, margin: "-60px" }}
                    className="relative flex h-6 items-center"
                  >
                    <motion.div
                      variants={{
                        hidden: { width: 0 },
                        show: {
                          width: `${pct}%`,
                          transition: { duration: 1, ease: EASE, delay: 0.1 + i * 0.06 },
                        },
                      }}
                      className={`h-5 shrink-0 rounded-r transition-opacity ${
                        d.muted ? "bg-line-strong" : "bg-accent"
                      } ${active !== null && active !== i ? "opacity-50" : ""}`}
                    />
                    <span className="ml-2 whitespace-nowrap text-sm font-semibold tabular-nums text-ink">
                      {fmt(d.value)}
                    </span>

                    {active === i && (
                      <span
                        role="tooltip"
                        className="pointer-events-none absolute -top-9 left-0 z-10 whitespace-nowrap rounded-md bg-ink px-2.5 py-1.5 text-xs text-white shadow-card"
                      >
                        <strong className="font-semibold">
                          {showShare ? `${Math.round((d.value / total) * 100)}%` : fmt(d.value)}
                        </strong>{" "}
                        <span className="text-white/75">{showShare ? shareLabel : d.label}</span>
                      </span>
                    )}
                  </motion.div>
                </div>
              );
            })}
          </div>

          {/* x axis */}
          <div className="mt-4 grid grid-cols-1 sm:grid-cols-[11.5rem_1fr] sm:gap-4" aria-hidden>
            <span className="hidden sm:block" />
            <div className="relative h-5 border-t border-line" style={{ width: `${PLOT * 100}%` }}>
              {tickValues.map((t) => (
                <span
                  key={t}
                  className="absolute top-1.5 -translate-x-1/2 text-xs tabular-nums text-primary-700 first:translate-x-0 last:-translate-x-full"
                  style={{ left: `${(t / max) * 100}%` }}
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      )}

      {table && (
        <table id={tableId} className="w-full text-left text-sm">
          <thead>
            <tr className="text-xs uppercase tracking-[0.08em] text-ink-subtle">
              <th className="border-b border-line py-2 pr-4 font-semibold">Category</th>
              <th className="border-b border-line py-2 pr-4 text-right font-semibold">Value</th>
              {showShare && (
                <th className="border-b border-line py-2 text-right font-semibold">Share</th>
              )}
            </tr>
          </thead>
          <tbody>
            {data.map((d) => (
              <tr key={d.label}>
                <td className="border-b border-line py-2 pr-4 text-ink">{d.label}</td>
                <td className="border-b border-line py-2 pr-4 text-right tabular-nums text-ink">
                  {fmt(d.value)}
                </td>
                {showShare && (
                  <td className="border-b border-line py-2 text-right tabular-nums text-ink-muted">
                    {Math.round((d.value / total) * 100)}%
                  </td>
                )}
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button
        type="button"
        onClick={() => setTable((t) => !t)}
        aria-controls={tableId}
        aria-expanded={table}
        className="mt-5 text-sm font-medium text-primary-700 underline decoration-primary/30 underline-offset-4 hover:decoration-primary-700"
      >
        {table ? "Show as chart" : "Show as table"}
      </button>
    </figure>
  );
}
