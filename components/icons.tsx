import { type SVGProps } from "react";

/* 24px grid, 1.6 stroke, round caps. Purpose-built for each concept:
   no generic shapes standing in for meaning. */
const base = {
  width: 24,
  height: 24,
  viewBox: "0 0 24 24",
  fill: "none",
  stroke: "currentColor",
  strokeWidth: 1.6,
  strokeLinecap: "round" as const,
  strokeLinejoin: "round" as const,
  "aria-hidden": true,
};

/** Step 1: map the companies. A folded map. */
export function MapFold(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M9 4.5 3.5 6.5v13l5.5-2 6 2 5.5-2v-13l-5.5 2-6-2Z" />
      <path d="M9 4.5v13" />
      <path d="M15 6.5v13" />
    </svg>
  );
}

/** Step 2: write the pitch. A message with lines of copy. */
export function Pitch(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M5.5 4h13A1.5 1.5 0 0 1 20 5.5v9a1.5 1.5 0 0 1-1.5 1.5H10l-4.5 4v-4A1.5 1.5 0 0 1 4 14.5v-9A1.5 1.5 0 0 1 5.5 4Z" />
      <path d="M8 8.5h8" />
      <path d="M8 12h5" />
    </svg>
  );
}

/** Step 3: send and track. A paper plane with motion lines. */
export function SendTrack(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M21 3 10.5 13.5" />
      <path d="M21 3 14.5 21l-4-7.5L3 9.5Z" />
      <path d="M3 17.5h3" />
      <path d="M3 20.5h5" />
    </svg>
  );
}

/** Step 4: make the hire. A person with a check. */
export function Hire(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="9.5" cy="8" r="3.5" />
      <path d="M3 20c.7-3.4 3.3-5.5 6.5-5.5s5.8 2.1 6.5 5.5" />
      <path d="m15.5 10.5 2 2 4-4" />
    </svg>
  );
}

export function Lock(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <rect x="5" y="10.5" width="14" height="10" rx="2" />
      <path d="M8.5 10.5v-3a3.5 3.5 0 0 1 7 0v3" />
      <path d="M12 14.5V17" />
    </svg>
  );
}

export function Check(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="m5 12.5 4.5 4.5L19 7.5" />
    </svg>
  );
}

export function TrendUp(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M3 17 9 11l4 4 8-8" />
      <path d="M15 7h6v6" />
    </svg>
  );
}

export function Shield(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <path d="M12 3 4.5 6v6c0 4.4 3.1 7.9 7.5 9 4.4-1.1 7.5-4.6 7.5-9V6L12 3Z" />
      <path d="m9 12 2 2 4-4" />
    </svg>
  );
}

export function Target(props: SVGProps<SVGSVGElement>) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="8.5" />
      <circle cx="12" cy="12" r="4.5" />
      <circle cx="12" cy="12" r="1" />
    </svg>
  );
}
