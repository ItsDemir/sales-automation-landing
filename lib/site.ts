/* ------------------------------------------------------------------ *
 * Site-wide links & offer copy.
 *
 * ⚠️  STRIPE_PILOT_URL is a PLACEHOLDER. Before deploying, replace it
 *     with your real Stripe Payment Link:
 *       Stripe Dashboard → Payment Links → Create → copy the
 *       https://buy.stripe.com/… URL and paste it below.
 *     Create it as a $499 one-time payment for the "Pilot" offer.
 *     The pilot is not shown on the page while pricing is limited to
 *     Data Feed Only and Professional.
 * ------------------------------------------------------------------ */
export const STRIPE_PILOT_URL =
  "https://buy.stripe.com/REPLACE_WITH_YOUR_PILOT_LINK";

export const PILOT_PRICE = "$499";
export const PILOT_LABEL = `Start a pilot: ${PILOT_PRICE}`;

export const CALENDLY_URL = "https://calendly.com/demir-vrmomentum/30min";
export const CONTACT_EMAIL = "support@vrmomentum.com";

/* ------------------------------------------------------------------ *
 * Lead magnet: the free AI Diagnostics Companies List (30 companies).
 *
 * ⚠️  Until you have a signup form or hosted file, this opens a
 *     prefilled email to CONTACT_EMAIL so every request still reaches
 *     you. To upgrade, replace LEAD_MAGNET_URL with either:
 *       • a form that collects an email first (Tally, ConvertKit,
 *         HubSpot, Typeform…), or
 *       • a file in /public, e.g. "/ai-diagnostics-companies.pdf".
 * ------------------------------------------------------------------ */
export const LEAD_MAGNET_LABEL = "Download the Free AI Diagnostics Companies List";
export const LEAD_MAGNET_COUNT = 30;

export const LEAD_MAGNET_URL = `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(
  "Send me the free AI Diagnostics Companies List",
)}&body=${encodeURIComponent(
  "Hi Momentum,\n\nPlease send me the free list of AI diagnostics companies.\n\nName:\nCompany:\nRoles we're hiring for:\n",
)}`;

/** Open hosted forms/files in a new tab; leave mailto links alone. */
export const LEAD_MAGNET_EXTERNAL = LEAD_MAGNET_URL.startsWith("http");
