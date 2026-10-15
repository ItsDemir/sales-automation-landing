import { type ReactNode, type AnchorHTMLAttributes } from "react";
import { Reveal } from "./motion";
import { Check } from "./icons";

/* ------------------------------------------------------------------ *
 * Shared primitives. Every section is built from these so spacing,
 * type, and color stay consistent. Rules live in DESIGN.md.
 * ------------------------------------------------------------------ */

type Tone = "canvas" | "surface";

export function Section({
  id,
  tone = "canvas",
  className = "",
  children,
}: {
  id?: string;
  tone?: Tone;
  className?: string;
  children: ReactNode;
}) {
  const bg = tone === "surface" ? "bg-surface border-y border-line" : "bg-canvas";
  return (
    <section id={id} className={`${bg} ${className}`}>
      <div className="mx-auto max-w-wide px-5 py-24 sm:px-6 lg:px-10 lg:py-32">
        {children}
      </div>
    </section>
  );
}

export function Eyebrow({ children, light = false }: { children: ReactNode; light?: boolean }) {
  return (
    <p
      className={`text-sm font-semibold uppercase tracking-[0.12em] ${
        light ? "text-primary-100" : "text-primary-700"
      }`}
    >
      {children}
    </p>
  );
}

/** Eyebrow + teal headline + one short explanatory line. */
export function SectionHeading({
  eyebrow,
  title,
  children,
}: {
  eyebrow: string;
  title: ReactNode;
  children?: ReactNode;
}) {
  return (
    <Reveal className="max-w-3xl">
      <Eyebrow>{eyebrow}</Eyebrow>
      <h2 className="mt-4 text-display-lg text-balance text-primary">{title}</h2>
      {children && (
        <p className="mt-5 max-w-2xl text-lead text-ink-muted">{children}</p>
      )}
    </Reveal>
  );
}

/* ── Buttons ─────────────────────────────────────────────────────── */
const BUTTON_VARIANTS = {
  /** Coral: the one primary CTA per view. Dark text keeps 5.2:1. */
  coral:
    "bg-accent text-ink hover:bg-accent-400 focus-visible:outline-white",
  /** Teal fill: primary actions on light surfaces. */
  primary:
    "bg-primary-700 text-white hover:bg-primary-800 focus-visible:outline-primary",
  /** Teal outline: secondary actions on light surfaces. */
  outline:
    "border border-primary-700/30 bg-surface text-primary-700 hover:border-primary-700 hover:bg-primary-50 focus-visible:outline-primary",
  /** White outline: secondary actions on teal. */
  "outline-light":
    "border border-white/50 text-white hover:bg-white hover:text-primary-800 focus-visible:outline-white",
};

export function Button({
  variant = "primary",
  size = "md",
  className = "",
  children,
  ...props
}: AnchorHTMLAttributes<HTMLAnchorElement> & {
  variant?: keyof typeof BUTTON_VARIANTS;
  size?: "md" | "lg";
}) {
  const sizing = size === "lg" ? "px-6 py-3.5 text-base" : "px-5 py-3 text-sm";
  return (
    <a
      {...props}
      className={`group inline-flex items-center justify-center gap-2 rounded-lg font-semibold transition-colors focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizing} ${BUTTON_VARIANTS[variant]} ${className}`}
    >
      {children}
    </a>
  );
}

/* ── Status + badges ─────────────────────────────────────────────── */
export type ReplyStatus = "Interested" | "Replied" | "Queued";

const STATUS_STYLES: Record<ReplyStatus, { chip: string; dot: string }> = {
  Interested: { chip: "bg-secondary-50 text-secondary-700", dot: "bg-secondary" },
  Replied: { chip: "bg-primary-50 text-primary-700", dot: "bg-primary" },
  Queued: { chip: "bg-slate-100 text-ink-muted", dot: "bg-ink-faint" },
};

/** Reply status: always a dot plus a word, never color alone. */
export function StatusChip({ status }: { status: ReplyStatus }) {
  const s = STATUS_STYLES[status];
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-full px-2.5 py-1 text-xs font-semibold ${s.chip}`}
    >
      <span className={`h-1.5 w-1.5 rounded-full ${s.dot}`} />
      {status}
    </span>
  );
}

/** The only solid coral element besides the hero CTA. */
export function QualifiedBadge() {
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-accent px-2 py-0.5 text-xs font-semibold text-ink">
      <Check className="h-3 w-3" strokeWidth={2.4} />
      Qualified
    </span>
  );
}

export function Chip({ children }: { children: ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md bg-slate-100 px-2 py-1 text-xs font-medium text-ink-muted">
      {children}
    </span>
  );
}
