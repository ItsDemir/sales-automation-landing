/* ------------------------------------------------------------------ *
 * Momentum's own research claims: the company map and the redacted
 * profiles. (Published, cited market data lives in market-data.ts.)
 *
 * ⚠️  COMPANY_PROFILES below are SAMPLE values. While RESEARCH_VERIFIED
 *     is false, the page labels them as example profiles. To publish
 *     real profiles from your company map:
 *       1. Replace COMPANY_PROFILES with entries from your map.
 *       2. Set RESEARCH_VERIFIED = true.
 *     COMPANIES_MAPPED and OPEN_ROLES_LABEL are your own claims about
 *     your map. Keep the export that backs them.
 * ------------------------------------------------------------------ */
export const RESEARCH_VERIFIED = false;
export const COMPANIES_MAPPED = 50;
export const OPEN_ROLES_LABEL = "200+";

export const PROFILES_CAPTION = RESEARCH_VERIFIED
  ? `From our map of ${COMPANIES_MAPPED} Series B-D AI diagnostics companies. Company names withheld.`
  : "Example profiles for illustration. Company names withheld.";

/* ── Redacted company profiles ───────────────────────────────────── */
export type OrgNode = { role: string; count?: number; children?: OrgNode[] };
export type OpenRole = { role: string; count?: number };
export type CompanyProfile = {
  stage: string;
  focus: string;
  engineers: number;
  org: OrgNode;
  openRoles: OpenRole[];
};

export const COMPANY_PROFILES: CompanyProfile[] = [
  {
    stage: "Series C",
    focus: "Radiology AI",
    engineers: 42,
    org: {
      role: "VP Engineering",
      children: [
        { role: "Head of ML", children: [{ role: "Senior ML Engineer", count: 4 }] },
        { role: "Platform Lead", children: [{ role: "Backend Engineer", count: 5 }] },
        { role: "Head of Clinical Ops" },
      ],
    },
    openRoles: [{ role: "Staff ML Engineer" }, { role: "MLOps Engineer" }],
  },
  {
    stage: "Series B",
    focus: "Digital pathology",
    engineers: 18,
    org: {
      role: "CTO",
      children: [
        { role: "ML Lead", children: [{ role: "ML Engineer", count: 3 }] },
        { role: "Head of Product" },
        { role: "Head of Regulatory" },
      ],
    },
    openRoles: [
      { role: "Head of Platform" },
      { role: "Senior Backend Engineer" },
      { role: "Product Manager" },
    ],
  },
  {
    stage: "Series D",
    focus: "Cardiology AI",
    engineers: 85,
    org: {
      role: "VP Engineering",
      children: [
        { role: "Director of ML", children: [{ role: "Senior ML Engineer", count: 9 }] },
        { role: "Director of Platform" },
        { role: "Head of Quality and Regulatory" },
      ],
    },
    openRoles: [
      { role: "Principal ML Engineer" },
      { role: "Data Engineer", count: 2 },
      { role: "Security Engineer" },
    ],
  },
  {
    stage: "Series B",
    focus: "Ophthalmology screening",
    engineers: 22,
    org: {
      role: "VP Engineering",
      children: [
        { role: "Senior ML Engineer", count: 3 },
        { role: "Product Lead" },
        { role: "Head of Clinical Ops" },
      ],
    },
    openRoles: [
      { role: "ML Engineer" },
      { role: "Frontend Engineer" },
      { role: "Product Manager" },
    ],
  },
];

export const openRoleCount = (roles: OpenRole[]) =>
  roles.reduce((n, r) => n + (r.count ?? 1), 0);
