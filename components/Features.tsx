"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Target, Pen, Send, Layers, Shield, Clock } from "./icons";

const EASE = [0.16, 1, 0.3, 1] as const;

/* ------------------------------------------------------------------ *
 * SOURCES
 * Every industry figure used below maps to one of these citations by
 * `ref` id. Keep this list honest: if you can't point a number at a
 * real, dated source, don't publish it. Footnotes render at the
 * bottom of the section.
 * ------------------------------------------------------------------ */
const SOURCES = [
  {
    id: 1,
    label:
      "Salesforce — State of Sales report (5th ed., 2023). Reps spend ~70% of their week on non-selling work; only ~28% actually selling — nearly two full days a week lost to admin.",
    url: "https://www.salesforce.com/news/stories/sales-research-2023/",
  },
  {
    id: 2,
    label:
      "Instantly / Belkins — B2B cold-email benchmarks (2024–2025). Average reply rates land around 1–5%; tightly targeted, personalized campaigns roughly double the reply rate of generic blasts.",
    url: "https://instantly.ai/blog/cold-email-reply-rate-benchmarks/",
  },
  {
    id: 3,
    label:
      "Mailgun State of Email Deliverability (2024) & EmailToolTester studies. Global average inbox placement sits near 83–85% — roughly 1 in 6 emails never reaches the inbox. Full SPF + DKIM + DMARC authentication lifts placement to ~85–95%.",
    url: "https://www.mailgun.com/resources/research/state-of-email-deliverability/",
  },
  {
    id: 4,
    label:
      "SalesHive & Martal — SDR cost analyses (2024–2025). A fully-loaded SDR (base + commission + benefits + tooling) typically costs ~$80K–$110K/year; average U.S. B2B rep time bills near $66/hour.",
    url: "https://saleshive.com/blog/true-cost-sdr-sales-development-rep/",
  },
  {
    id: 5,
    label:
      "Industry automation studies (CPQ / sales-automation vendors, 2024). Removing manual steps from outreach and hand-offs commonly shortens sales cycles by ~15–30%.",
    url: "https://www.avoma.com/blog/how-to-shorten-your-sales-cycle",
  },
] as const;

/* ------------------------------------------------------------------ *
 * INDUSTRY BENCHMARKS — the credibility row.
 * These are external, sourced facts about the problem — NOT claims
 * about Momentum's own results. Framed as "here's what the industry
 * looks like," which is what we can honestly stand behind today.
 * ------------------------------------------------------------------ */
const BENCHMARKS = [
  {
    stat: "~70%",
    caption: "of a rep's week goes to non-selling work — admin, research, data entry.",
    ref: 1,
  },
  {
    stat: "1–5%",
    caption: "typical B2B cold-email reply rate. Tight targeting can double it.",
    ref: 2,
  },
  {
    stat: "~1 in 6",
    caption: "marketing emails never reach the inbox without proper authentication.",
    ref: 3,
  },
];

/* ------------------------------------------------------------------ *
 * FEATURE CARDS — before / after workflows.
 *
 * `before` steps use reasonable, research-informed estimates for a rep
 * running manual outbound at meaningful volume (see the "typical team"
 * model below). They are illustrative of the busywork Momentum removes,
 * not a guarantee. The net *reclaimed* time is stated conservatively in
 * the value-math block, because reps still review drafts, approve lists,
 * and run live conversations.
 * ------------------------------------------------------------------ */
const FEATURES = [
  {
    Icon: Target,
    kicker: "Prospecting",
    title: "Prospects, already found",
    before: [
      ["Build the target account list", "~2 hrs"],
      ["Track down the right decision-makers", "~2 hrs"],
      ["Verify emails & enrich records", "~1 hr"],
    ],
    after:
      "You get a verified, in-vertical list of real decision-makers — no scraped lists, no bounced addresses to clean up.",
    saved: "~5 hrs/week per rep",
  },
  {
    Icon: Pen,
    kicker: "Personalization",
    title: "Personalized, not templated",
    before: [
      ["Research each prospect one by one", "~2 hrs"],
      ["Draft and rewrite each email", "~2 hrs"],
      ["Build the multi-touch follow-up", "~1 hr"],
    ],
    after:
      "Every email is written for one reader from real company signals, then queued as a full sequence. Personalized outreach reply-rates roughly double generic blasts.",
    saved: "~5 hrs/week per rep",
    ref: 2,
  },
  {
    Icon: Send,
    kicker: "Delivery",
    title: "Sequences that run themselves",
    before: [
      ["Send and space out each touch by hand", "~1.5 hrs"],
      ["Chase bounces and spam flags", "~1 hr"],
      ["Restart stalled follow-ups", "~0.5 hr"],
    ],
    after:
      "Momentum runs the full multi-touch sequence on schedule, handles bounces, and pauses on reply — so nothing gets dropped and nothing gets double-sent.",
    saved: "~3 hrs/week per rep",
  },
  {
    Icon: Layers,
    kicker: "Admin",
    title: "Zero admin work",
    before: [
      ["Log every touch in the CRM", "~3 hrs"],
      ["Keep the tracking spreadsheet current", "~2.5 hrs"],
      ["Pull status for the weekly check-in", "~1.5 hrs"],
    ],
    after:
      "Every send, open, and reply syncs to your CRM automatically and shows up on a live dashboard. No copy-paste, no end-of-week reconciliation.",
    saved: "~7 hrs/week per rep",
  },
];

/* ------------------------------------------------------------------ *
 * "TYPICAL TEAM" VALUE MODEL — clearly hypothetical.
 * All inputs are stated so a prospect can swap in their own numbers.
 * Deliberately conservative: we count a 40% reclaim of the ~20 busywork
 * hours, not 100%, because reps still review and sell.
 * ------------------------------------------------------------------ */
const MODEL = {
  team: 6, // reps (within the 5–10 mid-market range)
  loadedRate: 70, // $/hr, loaded — aligns with source [4]
  busyworkHrs: 20, // per rep / week, sum of the "before" tasks above (5+5+3+7)
  reclaimPct: 0.4, // conservative 40% (range: 30–50%)
};
const reclaimedPerRep = Math.round(MODEL.busyworkHrs * MODEL.reclaimPct); // ≈ 7 hrs
const teamHrsWeek = reclaimedPerRep * MODEL.team; // ≈ 42 hrs
const annualValue = reclaimedPerRep * MODEL.loadedRate * 52 * MODEL.team; // ≈ $153K

/* ------------------------------------------------------------------ *
 * COMPARISON TABLE — manual vs Momentum.
 * ------------------------------------------------------------------ */
const COMPARISON = [
  ["Weekly busywork / rep", "~20 hrs", "Handled for you"],
  ["Prospect list quality", "Scraped & unverified", "Verified decision-makers"],
  ["Personalization", "Merge tags, if any", "Written per reader"],
  ["Inbox placement", "Luck of the draw", "SPF · DKIM · DMARC + warmup"],
  ["Reporting", "Manual spreadsheet", "Live dashboard + weekly read"],
];

export default function Features() {
  return (
    <section
      id="features"
      className="mx-auto max-w-wide px-6 py-28 lg:px-10 lg:py-36"
    >
      {/* ── Heading ─────────────────────────────────────────────── */}
      <div className="max-w-2xl">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.7, ease: EASE }}
          className="text-sm uppercase tracking-widest text-accent"
        >
          Why Momentum
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.05 }}
          className="mt-4 font-display text-[clamp(2.25rem,5vw,4rem)] font-semibold leading-[1.02] tracking-tightest text-balance text-chalk"
        >
          The math on manual outreach.
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.8, ease: EASE, delay: 0.1 }}
          className="mt-5 text-lg leading-relaxed text-chalk-muted"
        >
          Outbound is mostly overhead — research, drafting, sending, and
          logging. Here&apos;s where the hours actually go, and what happens
          when Momentum absorbs them.
        </motion.p>
      </div>

      {/* ── Industry benchmark row (sourced) ────────────────────── */}
      <RevealGroup className="mt-14 grid gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10 sm:grid-cols-3">
        {BENCHMARKS.map((b) => (
          <motion.div
            key={b.stat}
            variants={{
              hidden: { opacity: 0, y: 20 },
              show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: EASE } },
            }}
            className="bg-ink-900 p-7 lg:p-8"
          >
            <p className="font-display text-4xl font-semibold tracking-tightest text-accent">
              {b.stat}
            </p>
            <p className="mt-3 text-[15px] leading-relaxed text-chalk-muted">
              {b.caption}
              <sup className="ml-0.5 text-chalk-faint">[{b.ref}]</sup>
            </p>
          </motion.div>
        ))}
      </RevealGroup>
      <Reveal delay={0.1}>
        <p className="mt-4 text-xs text-chalk-faint">
          Figures describe the industry, not Momentum&apos;s own results —
          sources listed below.
        </p>
      </Reveal>

      {/* ── Feature cards: before / after ───────────────────────── */}
      <div className="mt-24 space-y-6">
        {FEATURES.map(({ Icon, kicker, title, before, after, saved, ref }, i) => (
          <motion.div
            key={title}
            initial={{ opacity: 0, y: 28 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: EASE, delay: i * 0.04 }}
            className="rounded-2xl border border-white/10 bg-ink-900 p-7 lg:p-9"
          >
            {/* card header */}
            <div className="flex flex-wrap items-center gap-3">
              <Icon className="h-6 w-6 text-accent" />
              <span className="text-xs uppercase tracking-widest text-chalk-muted">
                {kicker}
              </span>
              <span className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-accent/40 px-3 py-1 text-xs font-medium text-accent">
                <Clock className="h-3.5 w-3.5" />
                {saved}
              </span>
            </div>
            <h3 className="mt-5 font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight tracking-tightest text-chalk">
              {title}
            </h3>

            <div className="mt-7 grid gap-6 lg:grid-cols-2 lg:gap-10">
              {/* BEFORE */}
              <div>
                <p className="text-xs uppercase tracking-widest text-chalk-faint">
                  Before · by hand
                </p>
                <ul className="mt-4 space-y-2.5">
                  {before.map(([step, t]) => (
                    <li
                      key={step}
                      className="flex items-center justify-between gap-4 rounded-lg border border-white/5 bg-ink-800 px-4 py-2.5"
                    >
                      <span className="text-sm text-chalk-muted line-through decoration-white/15">
                        {step}
                      </span>
                      <span className="shrink-0 font-display text-sm text-chalk-faint tabular-nums">
                        {t}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* AFTER */}
              <div className="rounded-lg border border-accent/20 bg-accent/[0.04] p-5">
                <p className="text-xs uppercase tracking-widest text-accent">
                  After · with Momentum
                </p>
                <p className="mt-4 text-[15px] leading-relaxed text-chalk">
                  {after}
                  {ref && (
                    <sup className="ml-0.5 text-chalk-faint">[{ref}]</sup>
                  )}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* bridge: honest link from gross busywork → conservative reclaim */}
      <Reveal className="mt-8">
        <p className="max-w-3xl text-[15px] leading-relaxed text-chalk-muted">
          Add the four cards up and it&apos;s{" "}
          <span className="text-chalk">
            ~{MODEL.busyworkHrs} hours of busywork per rep, every week
          </span>
          . We don&apos;t claim all of it back — the model below counts a
          conservative {Math.round(MODEL.reclaimPct * 100)}% as reclaimed{" "}
          <span className="text-chalk">selling</span> time, since reps still
          review drafts and run the live conversations.
        </p>
      </Reveal>

      {/* ── Transparent value math (clearly hypothetical) ───────── */}
      <Reveal className="mt-24">
        <div className="rounded-2xl border border-white/10 bg-ink-800 p-8 lg:p-12">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 px-3 py-1 text-xs uppercase tracking-widest text-chalk-muted">
            Illustrative example — not a customer result
          </span>
          <h3 className="mt-6 max-w-3xl font-display text-[clamp(1.5rem,3vw,2.5rem)] font-medium leading-tight tracking-tightest text-chalk">
            For a typical mid-market SaaS team, automation could reclaim{" "}
            <span className="text-accent">~{teamHrsWeek} hours a week</span> —
            worth roughly{" "}
            <span className="text-accent">
              ${Math.round(annualValue / 1000)}K a year
            </span>{" "}
            in selling time.
          </h3>

          {/* the assumptions, laid bare */}
          <div className="mt-8 grid gap-px overflow-hidden rounded-xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-4">
            {[
              ["Team size", `${MODEL.team} reps`, "within a 5–10 person team"],
              ["Busywork today", `~${MODEL.busyworkHrs} hrs`, "per rep / week"],
              [
                "Reclaimed",
                `${Math.round(MODEL.reclaimPct * 100)}%`,
                "conservative (30–50% range)",
              ],
              ["Loaded cost", `$${MODEL.loadedRate}/hr`, "per rep, fully loaded"],
            ].map(([label, value, note]) => (
              <div key={label} className="bg-ink-900 p-5">
                <p className="text-xs uppercase tracking-wide text-chalk-muted">
                  {label}
                </p>
                <p className="mt-2 font-display text-2xl font-semibold text-chalk">
                  {value}
                </p>
                <p className="mt-1 text-xs text-chalk-faint">{note}</p>
              </div>
            ))}
          </div>

          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-chalk-muted">
            The math:{" "}
            <span className="text-chalk">
              {reclaimedPerRep} hrs reclaimed × ${MODEL.loadedRate}/hr × 52 weeks
              × {MODEL.team} reps ≈ $
              {annualValue.toLocaleString()}/year.
            </span>{" "}
            We hold the reclaim to {Math.round(MODEL.reclaimPct * 100)}% on
            purpose — reps still review drafts, approve lists, and run live
            conversations. Swap in your own team size, rate, and hours and the
            model holds.
            <sup className="ml-0.5 text-chalk-faint">[4]</sup>
          </p>
        </div>
      </Reveal>

      {/* ── Manual vs Momentum comparison table ─────────────────── */}
      <Reveal className="mt-16">
        <h3 className="font-display text-2xl font-medium tracking-tightest text-chalk">
          Manual vs. Momentum
        </h3>
        <div className="mt-6 overflow-x-auto">
          <table className="w-full min-w-[560px] border-separate border-spacing-0 text-left text-sm">
            <thead>
              <tr className="text-xs uppercase tracking-widest text-chalk-muted">
                <th className="border-b border-white/10 py-4 pr-4 font-normal">
                  &nbsp;
                </th>
                <th className="border-b border-white/10 py-4 pr-4 font-normal">
                  Manual outbound
                </th>
                <th className="border-b border-accent/30 py-4 pr-4 font-normal text-accent">
                  With Momentum
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map(([row, manual, momentum]) => (
                <tr key={row}>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk">
                    {row}
                  </td>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk-muted">
                    {manual}
                  </td>
                  <td className="border-b border-white/5 py-4 pr-4 text-chalk">
                    {momentum}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>

      {/* ── Deliverability & compliance ─────────────────────────── */}
      <Reveal className="mt-24">
        <div className="rounded-2xl border border-white/10 bg-ink-900 p-8 lg:p-12">
          <div className="flex items-center gap-3">
            <Shield className="h-6 w-6 text-accent" />
            <span className="text-xs uppercase tracking-widest text-chalk-muted">
              Deliverability &amp; compliance
            </span>
          </div>
          <h3 className="mt-5 max-w-2xl font-display text-[clamp(1.5rem,3vw,2.25rem)] font-medium leading-tight tracking-tightest text-chalk">
            The best email is worthless in spam.
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-relaxed text-chalk-muted">
            Roughly 1 in 6 emails never reaches the inbox, and Gmail and
            Microsoft now reject bulk mail that isn&apos;t authenticated.
            Momentum handles the plumbing so your sends actually land.
            <sup className="ml-0.5 text-chalk-faint">[3]</sup>
          </p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                "Authentication",
                "SPF, DKIM & DMARC configured and monitored on every sending domain.",
              ],
              [
                "Inbox warmup",
                "Domains and mailboxes ramped gradually to build sender reputation before volume.",
              ],
              [
                "Bounce handling",
                "Invalid addresses caught and suppressed automatically to protect deliverability.",
              ],
              [
                "Volume pacing",
                "Sends throttled and spread to stay within provider limits and off spam lists.",
              ],
            ].map(([label, body]) => (
              <div
                key={label}
                className="rounded-xl border border-white/5 bg-ink-800 p-5"
              >
                <p className="font-display text-base font-medium text-chalk">
                  {label}
                </p>
                <p className="mt-2 text-[13px] leading-relaxed text-chalk-muted">
                  {body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Reveal>

      {/* Testimonials intentionally omitted until we have real,
          attributable beta-user quotes. Do NOT add invented quotes —
          re-add a testimonial block here only with permission-backed
          names, titles, and companies. */}

      {/* ── Source citations ────────────────────────────────────── */}
      <Reveal className="mt-20 border-t border-white/10 pt-8">
        <p className="text-xs uppercase tracking-widest text-chalk-muted">
          Sources
        </p>
        <ol className="mt-4 space-y-2">
          {SOURCES.map((s) => (
            <li
              key={s.id}
              className="text-xs leading-relaxed text-chalk-faint"
            >
              <span className="text-chalk-muted">[{s.id}]</span>{" "}
              <a
                href={s.url}
                target="_blank"
                rel="noopener noreferrer"
                className="underline decoration-white/20 underline-offset-2 transition-colors hover:text-chalk hover:decoration-white/50"
              >
                {s.label}
              </a>
            </li>
          ))}
        </ol>
      </Reveal>
    </section>
  );
}
