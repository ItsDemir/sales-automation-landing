/* ------------------------------------------------------------------ *
 * Research data shown on the site: company profiles and the hiring
 * gap chart.
 *
 * ⚠️  The profiles and the by-function breakdown below are SAMPLE
 *     values written to match your stated totals (50 companies, 200+
 *     open roles). While RESEARCH_VERIFIED is false, the page labels
 *     them as illustrative. To publish your real research:
 *       1. Replace COMPANY_PROFILES and ROLES_BY_FUNCTION with counts
 *          from your company map.
 *       2. Set RESEARCH_AS_OF to the date of that export.
 *       3. Set RESEARCH_VERIFIED = true. The captions switch to a
 *          source line automatically.
 * ------------------------------------------------------------------ */
export const RESEARCH_VERIFIED = false;
export const RESEARCH_AS_OF = "October 2026";

export const COMPANIES_MAPPED = 50;
export const OPEN_ROLES_LABEL = "200+";
export const ROLES_PER_COMPANY_LABEL = "4";

export const RESEARCH_SOURCE = RESEARCH_VERIFIED
  ? `Source: Momentum research across ${COMPANIES_MAPPED} Series B-D AI diagnostics companies, ${RESEARCH_AS_OF}.`
  : "Illustrative figures.";

export const PROFILES_CAPTION = RESEARCH_VERIFIED
  ? `From our map of ${COMPANIES_MAPPED} Series B-D AI diagnostics companies. Company names withheld.`
  : "Example profiles for illustration. Company names withheld.";

/* ── Open roles by function, summed across mapped companies ──────── */
export const ROLES_BY_FUNCTION = [
  { label: "ML and AI engineering", value: 61 },
  { label: "Backend and platform", value: 47 },
  { label: "Data engineering", value: 34 },
  { label: "Product management", value: 26 },
  { label: "Security and compliance", value: 19 },
  { label: "Frontend and clinical apps", value: 17 },
];

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
