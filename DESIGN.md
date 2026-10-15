# Momentum Design System

Engineering recruiting pipeline for Series B-D AI diagnostics companies.

**Principle.** Everything should quietly say "we understand both healthcare
and engineering teams." Teal and green carry trust and momentum, coral marks
the data that matters, and org chart and pipeline visuals prove the research.
Confident, credible, data first. Never loud.

Tokens live in [`tailwind.config.ts`](./tailwind.config.ts). Shared
primitives live in [`components/ui.tsx`](./components/ui.tsx).

---

## 1. Color

| Token | Hex | Role |
|---|---|---|
| `primary` | `#0D9488` | Teal. Main headings, key borders, icons, focus rings, navigation accents. |
| `primary-700` | `#0F766E` | Teal for small text, button fills, and the hero and CTA backgrounds. |
| `primary-800` | `#115E59` | Hover for teal buttons. |
| `primary-50` / `100` | `#F0FDFA` / `#CCFBF1` | Tints for icon tiles and secondary text on teal. |
| `secondary` | `#10B981` | Warm green. Success, growth, the "hire" step, Professional tier accents. Fills and dots only. |
| `secondary-600` / `700` | `#059669` / `#047857` | Green as text: 600 for large stats, 700 for small text. |
| `accent` | `#F97316` | Coral. Chart bars, "Qualified" badges, open role markers, the hero CTA. Nothing else. |
| `accent-50` / `700` | `#FFF7ED` / `#C2410C` | Coral tint chip with readable coral text. |
| `canvas` | `#F8FAFC` | Page background. |
| `surface` | `#FFFFFF` | Cards and alternating sections. |
| `ink` | `#1E293B` | Primary text. |
| `ink-muted` / `subtle` / `faint` | `#475569` / `#64748B` / `#94A3B8` | Secondary text, captions, disabled and decorative. |
| `line` / `line-strong` | `#E2E8F0` / `#CBD5E1` | Hairlines, borders, chart grid. |

### Contrast rules (WCAG AA)

| Pair | Ratio | Use |
|---|---|---|
| `ink` on `canvas` | 14.0:1 | All body text |
| `ink-muted` on `canvas` | 7.3:1 | Secondary text |
| `ink-subtle` on `canvas` | 4.6:1 | Captions, smallest allowed gray |
| White on `primary-700` | 5.5:1 | Hero, CTA band, teal buttons |
| `primary-100` on `primary-700` | 4.9:1 | Secondary text on teal |
| White on `primary` (#0D9488) | 3.7:1 | Large text only. This is why the hero uses 700. |
| `primary` on `canvas` | 3.6:1 | Headings 24px and up only |
| `primary-700` on `canvas` | 5.2:1 | Eyebrows, links, axis labels |
| `secondary-600` on `canvas` | 3.6:1 | Large stat numbers only |
| `secondary-700` on `canvas` | 5.2:1 | Small green text |
| `ink` on `accent` | 5.2:1 | Coral buttons and badges. Never white on coral (2.8:1). |
| `accent` on `canvas` | 2.7:1 | Never as text. Chart bars carry direct value labels. |

---

## 2. Typography

One family: **Inter**, loaded with `next/font`. Bold and tightly tracked for
headlines, so they read as authoritative rather than trendy.

| Token | Size | Weight / tracking | Use |
|---|---|---|---|
| `text-display-xl` | 44 to 76px fluid | 700, -0.035em | Hero headline only |
| `text-display-lg` | 36 to 56px fluid | 700, -0.03em | Section headlines (teal) |
| `text-display-md` | 22 to 28px fluid | 600, -0.02em | Sub-section titles |
| `text-lead` | 19px / 1.65 | 400 | The one line under a headline |
| body | 16px / 1.6 | 400 | Paragraphs |
| `text-sm` | 14px | 400 to 600 | Card details, table cells |
| `text-xs` | 12px | 600, uppercase, +0.08 to 0.12em | Eyebrows, column heads, chips |

### Voice

- **Headlines** state a fact or outcome. "The research is done before your
  first call." Not "Supercharge your hiring."
- **Subheadings** explain something important, not sell. One or two short
  sentences.
- **Body copy** is 2 to 3 sentences per block, maximum. Recruiting leaders
  scan. White space does the work.
- Every stat is healthcare recruiting specific. No generic B2B SaaS numbers.
- No em dashes, no "etc.", no exclamation marks.

---

## 3. Layout

- Content width `max-w-wide` (1200px). Gutters 20px phone, 24px tablet, 40px desktop.
- Sections: 96px vertical padding, 128px on desktop, via `<Section>`.
- Backgrounds alternate `canvas` and `surface` (with a hairline) so sections
  separate without heavy dividers. Teal bookends the page: hero and final CTA.
- Radius: 8px (`rounded-lg`) for buttons, 12px (`rounded-xl`) for cards, 6px for chips.
- Shadow: `shadow-card` only, and only on the chart card, the pipeline
  dashboard, and the Professional tier.

---

## 4. Components

| Component | Where | Rules |
|---|---|---|
| `Section` | `ui.tsx` | Wraps every section. `tone="canvas"` or `"surface"`. |
| `SectionHeading` | `ui.tsx` | Eyebrow (teal 700, uppercase) + teal headline + one lead line. |
| `Button` | `ui.tsx` | `coral`: the single primary CTA on teal. `primary`: teal fill on light. `outline`: secondary on light. `outline-light`: secondary on teal. |
| `StatusChip` | `ui.tsx` | Interested (green), Replied (teal), Queued (slate). Always dot plus word. |
| `QualifiedBadge` | `ui.tsx` | Solid coral, ink text, check icon. Marks qualified candidates only. |
| `Chip` | `ui.tsx` | Slate metadata tags: stage, focus area, headcount. |
| Research card | `CompanyMapping.tsx` | Teal border at 40%. Blurred name, coral "open roles" chip, org tree, coral-dot hiring gaps. |
| Org tree | `CompanyMapping.tsx` | Root in teal tint, children as bordered nodes, slate connectors, `×n` counts. |
| Pipeline dashboard | `Pipeline.tsx` | Stat tiles, one filter row, then rows: role, current company, team context, status. |
| `BarChart` | `BarChart.tsx` | See section 6. |
| Compliance callout | `Compliance.tsx` | One quiet row: lock icon, one statement, three checks. |
| Pricing tiers | `Pricing.tsx` | Data Feed Only: 1px slate border, slate checks, outline button. Professional: 2px teal border, green top bar, green checks and usage line, teal button. |

---

## 5. Iconography

24px grid, 1.6 stroke, round caps and joins, `currentColor`. Each icon is
drawn for its concept, never a generic shape:

| Icon | Concept |
|---|---|
| `MapFold` | Map the companies |
| `Pitch` | Write the pitch (message with copy lines) |
| `SendTrack` | Send and track (plane with motion lines) |
| `Hire` | Make the hire (person with check) |
| `Lock` | Healthcare data handling |
| `TrendUp`, `Shield`, `Target` | Hiring demand, compliance bar, reach |

Steps 1 to 3 use teal tiles. The hire step uses green: green means hiring is
happening.

---

## 6. Data visualization

- **Form:** horizontal bars for comparisons. A single headline number is a
  stat, not a chart.
- **Color:** coral bars. For a comparison, the baseline is slate
  (`line-strong`) and Momentum is coral. Validated with the dataviz palette
  checker: coral passes as a single series but sits under 3:1 on the surface,
  so the next rule is mandatory.
- **Labels:** every bar carries its value at the tip in `ink`. Axis and
  category labels are `primary-700`. Text never takes the bar color.
- **Marks:** 20px bars, 4px rounded data end, square at the baseline, 1px
  solid grid. Ticks on 1, 2, or 5 times a power of ten.
- **Interaction:** hover or focus a bar for its share of the total. A "Show as
  table" toggle gives the same data without the chart.
- **Honesty:** every research chart shows a caption. While
  `RESEARCH_VERIFIED` is false in `lib/research.ts` it reads "Illustrative
  figures." Set it to true only once the numbers come from the real map.

---

## 7. Motion

- Section reveals: fade and 20px rise, 0.7 to 0.8s, ease `[0.16, 1, 0.3, 1]`, once.
- Hero: a DNA helix unzips into an org chart over a 12s loop (hold, morph,
  hold, morph back). One node turns coral and is labeled "Qualified".
- `prefers-reduced-motion`: the hero renders the org chart, still. No other
  motion is essential.
- Nothing bounces, spins, or counts up.

---

## 8. Do not

- No medical imagery: stethoscopes, hospitals, clinical settings.
- No abstract AI imagery, glowing brains, or sci-fi visuals.
- No gradients and no playful elements.
- No coral outside data, qualified badges, and the primary CTA.
- No overselling. This is B2B recruiting, not a consumer health brand.
- No invented testimonials or research presented as real. Use the
  `approved` flag in `Testimonials.tsx` and `RESEARCH_VERIFIED` in
  `lib/research.ts`.
