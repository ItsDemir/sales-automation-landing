"use client";

import { motion } from "framer-motion";
import Counter from "./Counter";

const ROWS = [
  { name: "Priya Nair", role: "VP Sales · Northwind", status: "Replied" },
  { name: "Marcus Feld", role: "Head of RevOps · Lumen", status: "Opened" },
  { name: "Dana Cho", role: "CRO · Fieldwork", status: "Queued" },
];

const statusColor: Record<string, string> = {
  Replied: "text-accent",
  Opened: "text-chalk",
  Queued: "text-chalk-faint",
};

/** The floating "live campaign" product mock in the hero. */
export default function DemoPanel() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.35 }}
      className="relative w-full rounded-2xl border border-white/10 bg-ink-800 p-1"
    >
      {/* window chrome */}
      <div className="flex items-center gap-2 px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
        <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
        <span className="h-2.5 w-2.5 rounded-full border border-white/15" />
        <span className="ml-3 text-xs text-chalk-faint">
          momentum / campaigns / q3-outbound
        </span>
        <span className="ml-auto flex items-center gap-1.5 text-xs text-accent">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-accent opacity-60" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent" />
          </span>
          Live
        </span>
      </div>

      <div className="rounded-xl border border-white/10 bg-ink-900 p-5 sm:p-6">
        {/* stat row */}
        <div className="grid grid-cols-3 gap-4 border-b border-white/10 pb-5">
          <Stat label="Prospects" value={<Counter to={143} />} />
          <Stat label="Emails ready" value={<Counter to={143} />} />
          <Stat
            label="Hours saved"
            value={<><Counter to={40} />+</>}
          />
        </div>

        {/* prospect feed */}
        <div className="mt-5 space-y-2">
          {ROWS.map((row, i) => (
            <motion.div
              key={row.name}
              initial={{ opacity: 0, x: 16 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                duration: 0.6,
                ease: [0.16, 1, 0.3, 1],
                delay: 0.7 + i * 0.18,
              }}
              className="flex items-center justify-between rounded-lg border border-white/5 bg-ink-800/60 px-4 py-3"
            >
              <div className="min-w-0">
                <p className="truncate text-sm font-medium text-chalk">
                  {row.name}
                </p>
                <p className="truncate text-xs text-chalk-muted">{row.role}</p>
              </div>
              <span
                className={`shrink-0 text-xs font-medium ${statusColor[row.status]}`}
              >
                {row.status}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

function Stat({ label, value }: { label: string; value: React.ReactNode }) {
  return (
    <div>
      <p className="font-display text-2xl font-semibold text-chalk sm:text-3xl">
        {value}
      </p>
      <p className="mt-1 text-xs uppercase tracking-wide text-chalk-muted">
        {label}
      </p>
    </div>
  );
}
