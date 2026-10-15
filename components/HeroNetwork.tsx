"use client";

import { motion, useReducedMotion } from "framer-motion";

/* ------------------------------------------------------------------ *
 * Hero visual: a DNA helix that unzips into an engineering org chart,
 * holds, then folds back. Healthcare on one side, engineering teams on
 * the other, the same 14 nodes in both. Reduced-motion users get the
 * org chart, static.
 * ------------------------------------------------------------------ */

const W = 480;
const H = 400;
const CX = 240;
const AMP = 86;
const RUNGS = 7;
const Y0 = 52;
const DY = 50;
const CORAL = "#F97316";
const WHITE = "#FFFFFF";

type Pt = { x: number; y: number; r: number; o: number };

const phaseAt = (y: number) => Math.PI / 6 + ((y - Y0) / DY) * (Math.PI / 3);

/* Helix: two strands, 7 rungs. Radius and opacity fake depth. */
const HELIX: Pt[] = [];
for (let i = 0; i < RUNGS; i++) {
  const y = Y0 + i * DY;
  const s = Math.sin(phaseAt(y));
  const c = Math.cos(phaseAt(y));
  HELIX.push({ x: CX + AMP * s, y, r: 5 + 1.6 * c, o: 0.75 + 0.25 * c });
  HELIX.push({ x: CX - AMP * s, y, r: 5 - 1.6 * c, o: 0.75 - 0.25 * c });
}

function strandPath(sign: 1 | -1) {
  const top = Y0 - 26;
  const span = (RUNGS - 1) * DY + 52;
  let d = "";
  for (let k = 0; k <= 56; k++) {
    const y = top + (k * span) / 56;
    const x = CX + sign * AMP * Math.sin(phaseAt(y));
    d += `${k ? "L" : "M"}${x.toFixed(1)} ${y.toFixed(1)} `;
  }
  return d;
}

/* Org chart: VP Engineering, three team leads, ten engineers. */
const L2_X = [96, 240, 384];
const L3_GROUPS = [
  [42, 78, 114, 150],
  [204, 240, 276],
  [348, 384, 420],
];
const ORG: Pt[] = [
  { x: 240, y: 64, r: 9, o: 1 },
  ...L2_X.map((x) => ({ x, y: 178, r: 7, o: 1 })),
  ...L3_GROUPS.flat().map((x) => ({ x, y: 300, r: 5, o: 0.9 })),
];
const ORG_EDGES: [number, number][] = [
  [0, 1],
  [0, 2],
  [0, 3],
  ...L3_GROUPS.flatMap((group, g) =>
    group.map((_, j) => {
      const child = 4 + L3_GROUPS.slice(0, g).flat().length + j;
      return [1 + g, child] as [number, number];
    }),
  ),
];
const L2_LABELS = ["ML", "Platform", "Clinical Ops"];
const HIRE = 6; // the qualified candidate: third engineer on the ML team

/* Top of the helix becomes the top of the org. */
const HELIX_ORDER = HELIX.map((p, i) => ({ p, i }))
  .sort((a, b) => a.p.y - b.p.y || a.p.x - b.p.x)
  .map(({ p }) => p);

const TIMES = [0, 0.3, 0.45, 0.8, 0.95, 1];
const LOOP = { duration: 12, times: TIMES, repeat: Infinity, ease: "easeInOut" as const };
const keys = (a: number, b: number) => [a, a, b, b, a, a];

export default function HeroNetwork() {
  const reduce = useReducedMotion();
  const helixFade = reduce
    ? { opacity: 0 }
    : { opacity: [1, 1, 0, 0, 1] };
  const helixFadeT = reduce
    ? { duration: 0 }
    : { duration: 12, times: [0, 0.3, 0.36, 0.93, 1], repeat: Infinity };
  const orgFade = reduce ? { opacity: 1 } : { opacity: [0, 0, 1, 1, 0, 0] };
  const orgFadeT = reduce
    ? { duration: 0 }
    : { duration: 12, times: [0, 0.4, 0.47, 0.8, 0.86, 1], repeat: Infinity };

  return (
    <svg
      viewBox={`0 0 ${W} ${H}`}
      className="h-auto w-full"
      role="img"
      aria-label="A DNA helix unfolding into an engineering org chart"
    >
      {/* helix strands + rungs */}
      <motion.g initial={{ opacity: 1 }} animate={helixFade} transition={helixFadeT}>
        <path d={strandPath(1)} stroke={WHITE} strokeOpacity={0.35} strokeWidth={1.5} fill="none" />
        <path d={strandPath(-1)} stroke={WHITE} strokeOpacity={0.35} strokeWidth={1.5} fill="none" />
        {Array.from({ length: RUNGS }, (_, i) => (
          <line
            key={i}
            x1={HELIX[i * 2].x}
            y1={HELIX[i * 2].y}
            x2={HELIX[i * 2 + 1].x}
            y2={HELIX[i * 2 + 1].y}
            stroke={WHITE}
            strokeOpacity={0.22}
            strokeWidth={1.5}
          />
        ))}
      </motion.g>

      {/* org edges + labels */}
      <motion.g initial={{ opacity: 0 }} animate={orgFade} transition={orgFadeT}>
        {ORG_EDGES.map(([a, b]) => (
          <line
            key={`${a}-${b}`}
            x1={ORG[a].x}
            y1={ORG[a].y}
            x2={ORG[b].x}
            y2={ORG[b].y}
            stroke={WHITE}
            strokeOpacity={0.4}
            strokeWidth={1.25}
          />
        ))}
        <text x={240} y={40} textAnchor="middle" className="fill-white text-[12px] font-semibold">
          VP Engineering
        </text>
        {L2_LABELS.map((label, i) => (
          <text
            key={label}
            x={L2_X[i] + 14}
            y={182}
            className="fill-primary-100 text-[11px] font-medium"
          >
            {label}
          </text>
        ))}
        <circle cx={ORG[HIRE].x} cy={ORG[HIRE].y} r={11} fill="none" stroke={CORAL} strokeOpacity={0.6} strokeWidth={1.5} />
        <text x={ORG[HIRE].x} y={328} textAnchor="middle" className="fill-white text-[11px] font-medium">
          Senior ML Engineer
        </text>
        <rect x={ORG[HIRE].x - 30} y={336} width={60} height={17} rx={4} fill={CORAL} />
        <text x={ORG[HIRE].x} y={348} textAnchor="middle" className="fill-ink text-[10px] font-semibold">
          Qualified
        </text>
      </motion.g>

      {/* the 14 nodes that travel between both shapes */}
      {HELIX_ORDER.map((h, i) => {
        const o = ORG[i];
        const isHire = i === HIRE;
        return (
          <motion.circle
            key={i}
            initial={{ cx: h.x, cy: h.y, r: h.r, opacity: h.o, fill: WHITE }}
            animate={
              reduce
                ? { cx: o.x, cy: o.y, r: o.r, opacity: o.o, fill: isHire ? CORAL : WHITE }
                : {
                    cx: keys(h.x, o.x),
                    cy: keys(h.y, o.y),
                    r: keys(h.r, o.r),
                    opacity: keys(h.o, o.o),
                    fill: isHire ? [WHITE, WHITE, CORAL, CORAL, WHITE, WHITE] : WHITE,
                  }
            }
            transition={reduce ? { duration: 0 } : LOOP}
          />
        );
      })}
    </svg>
  );
}
