"use client";

import { motion } from "framer-motion";

const panel =
  "relative aspect-[4/3] w-full overflow-hidden rounded-2xl border border-white/10 bg-ink-800 p-6";

/** 10x faster — bars racing to completion */
export function SpeedVisual() {
  const rows = [
    { label: "Manual", w: "34%", accent: false },
    { label: "Momentum", w: "100%", accent: true },
  ];
  return (
    <div className={panel}>
      <div className="flex h-full flex-col justify-center gap-6">
        {rows.map((r) => (
          <div key={r.label}>
            <div className="mb-2 flex justify-between text-xs text-chalk-muted">
              <span>{r.label}</span>
              <span>{r.accent ? "3 days" : "4 weeks"}</span>
            </div>
            <div className="h-3 w-full overflow-hidden rounded-full border border-white/10 bg-ink-900">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: r.w }}
                viewport={{ once: true }}
                transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
                className={`h-full rounded-full ${
                  r.accent ? "bg-accent" : "bg-white/25"
                }`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

/** Zero admin — tasks checking themselves off */
export function AdminVisual() {
  const tasks = ["Find contacts", "Write emails", "Send sequence", "Track replies"];
  return (
    <div className={panel}>
      <div className="flex h-full flex-col justify-center gap-3">
        {tasks.map((t, i) => (
          <motion.div
            key={t}
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex items-center gap-3 rounded-lg border border-white/5 bg-ink-900 px-4 py-2.5"
          >
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-accent text-[10px] text-accent">
              ✓
            </span>
            <span className="text-sm text-chalk-muted line-through decoration-white/20">
              {t}
            </span>
            <span className="ml-auto text-[10px] uppercase tracking-wide text-chalk-faint">
              handled
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/** Full visibility — a small reporting chart */
export function ReportVisual() {
  const bars = [42, 58, 47, 71, 63, 88];
  return (
    <div className={panel}>
      <div className="flex h-full flex-col">
        <div className="flex items-baseline justify-between">
          <span className="text-xs uppercase tracking-wide text-chalk-muted">
            Replies / week
          </span>
          <span className="font-display text-lg text-chalk">+31%</span>
        </div>
        <div className="mt-auto flex h-32 items-end gap-3">
          {bars.map((h, i) => (
            <motion.div
              key={i}
              initial={{ height: 0 }}
              whileInView={{ height: `${h}%` }}
              viewport={{ once: true }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: i * 0.08 }}
              className={`flex-1 rounded-t ${
                i === bars.length - 1 ? "bg-accent" : "bg-white/15"
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

/** Qualified only — a filter funnel */
export function QualifiedVisual() {
  const stages = [
    { label: "Sourced", w: "100%" },
    { label: "In-vertical", w: "72%" },
    { label: "Decision-makers", w: "48%" },
    { label: "Qualified", w: "30%", accent: true },
  ];
  return (
    <div className={panel}>
      <div className="flex h-full flex-col justify-center gap-3">
        {stages.map((s, i) => (
          <div key={s.label} className="flex items-center gap-3">
            <span className="w-28 shrink-0 text-xs text-chalk-muted">
              {s.label}
            </span>
            <div className="h-6 flex-1 overflow-hidden rounded border border-white/10 bg-ink-900">
              <motion.div
                initial={{ width: 0 }}
                whileInView={{ width: s.w }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: i * 0.1 }}
                className={`h-full ${s.accent ? "bg-accent" : "bg-white/15"}`}
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
