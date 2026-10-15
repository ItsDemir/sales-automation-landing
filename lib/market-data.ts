/* ------------------------------------------------------------------ *
 * Published market data shown in the Hiring gap section.
 *
 * Every figure below is taken from a named, dated source and keeps its
 * citation id. Rules for editing:
 *   • Only add a number you can point at a source in MARKET_SOURCES.
 *   • Do not mix counts from different snapshots of the FDA list in
 *     one chart. Trackers disagree by 10-15% depending on download
 *     date and counting method; this file uses one dataset (the FDA
 *     list through December 31, 2025, n = 1,430).
 *   • Derived numbers (sums, differences) must be exact arithmetic on
 *     published figures, never re-estimated.
 * Research collected October 2026.
 * ------------------------------------------------------------------ */

export const MARKET_SOURCES = [
  {
    id: 1,
    label:
      "Golshani P, et al. Longitudinal analysis of 1,430 FDA-authorized AI/ML-enabled medical devices, September 1995 to December 2025. Cureus, July 2026. As reported by AuntMinnie, \"Radiology dominates thirty years of FDA AI device approvals.\"",
    url: "https://www.auntminnie.com/imaging-informatics/artificial-intelligence/article/15830219/radiology-dominates-thirty-years-of-fda-ai-device-approvals",
  },
  {
    id: 2,
    label:
      "Lee YS, Youn BY. Clinical Specialty Expansion of AI-Enabled and Machine Learning-Enabled Medical Devices Authorized by the US Food and Drug Administration From 1995 to 2025: Longitudinal Content Analysis. J Med Internet Res. 2026;28:e103040. FDA registry downloaded March 1, 2026.",
    url: "https://doi.org/10.2196/103040",
  },
  {
    id: 3,
    label:
      "U.S. Food and Drug Administration. Artificial Intelligence-Enabled Medical Devices (list). The FDA notes the list is not exhaustive.",
    url: "https://www.fda.gov/medical-devices/software-medical-device-samd/artificial-intelligence-enabled-medical-devices",
  },
  {
    id: 4,
    label:
      "Rock Health. 2025 year-end digital health funding overview: A tale of two markets.",
    url: "https://rockhealth.com/insights/2025-year-end-digital-health-funding-overview-a-tale-of-two-markets/",
  },
] as const;

/* FDA-authorized AI-enabled devices with decisions through Dec 31, 2025. [1][2][3] */
export const FDA_AI_DEVICES_TOTAL = 1430;

/* Share in radiology, and in radiology + cardiovascular + neurology. [1] */
export const RADIOLOGY_SHARE = 76.5;
export const TOP_THREE_SHARE = 90.6;

/* Authorizations per year: period averages and the 2025 total. [1] */
export const AUTHORIZATIONS_PER_YEAR = [
  { label: "1995 to 2014, yearly average", value: 1.8 },
  { label: "2023 to 2025, yearly average", value: 264 },
  { label: "2025", value: 331 },
];

/* Share of U.S. digital health venture funding raised by AI-enabled companies. [4] */
export const AI_FUNDING_SHARE_2025 = 54;
export const AI_FUNDING_SHARE_2024 = 37;
