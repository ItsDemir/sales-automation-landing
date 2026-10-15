"use client";

import { Reveal, RevealGroup, motion } from "./motion";
import { Section, SectionHeading, Chip } from "./ui";
import {
  COMPANY_PROFILES,
  PROFILES_CAPTION,
  openRoleCount,
  type OrgNode,
} from "@/lib/research";

const fadeItem = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] as const } },
};

function OrgTree({ node, root = false }: { node: OrgNode; root?: boolean }) {
  return (
    <li
      className={
        root
          ? ""
          : "relative before:absolute before:-left-4 before:top-[1.05rem] before:w-3 before:border-t before:border-line-strong"
      }
    >
      <span
        className={`inline-flex items-center gap-2 rounded-md px-2.5 py-1.5 text-sm ${
          root
            ? "bg-primary-50 font-semibold text-primary-800"
            : "border border-line bg-surface text-ink"
        }`}
      >
        {node.role}
        {node.count && (
          <span className="rounded bg-slate-100 px-1.5 text-xs font-semibold tabular-nums text-ink-muted">
            ×{node.count}
          </span>
        )}
      </span>
      {node.children && (
        <ul className="ml-3 mt-2 space-y-2 border-l border-line-strong pl-4">
          {node.children.map((c) => (
            <OrgTree key={c.role} node={c} />
          ))}
        </ul>
      )}
    </li>
  );
}

export default function CompanyMapping() {
  return (
    <Section id="mapping" tone="surface">
      <SectionHeading eyebrow="Company mapping" title="The research is done before your first call.">
        For every company we map the engineering org, who leads each team, and
        which roles are open. Names are withheld here. Roles are not.
      </SectionHeading>

      <RevealGroup className="mt-14 grid gap-5 md:grid-cols-2">
        {COMPANY_PROFILES.map((c, i) => {
          const open = openRoleCount(c.openRoles);
          return (
            <motion.article
              key={i}
              variants={fadeItem}
              className="flex flex-col rounded-xl border border-primary/40 bg-surface p-6 lg:p-7"
            >
              <div className="flex items-start justify-between gap-4">
                <div className="min-w-0">
                  <span className="sr-only">Company name withheld</span>
                  <span
                    aria-hidden
                    className="block select-none text-lg font-bold text-ink blur-[6px]"
                  >
                    Redacted company
                  </span>
                </div>
                <span className="shrink-0 rounded-md bg-accent-50 px-2.5 py-1 text-xs font-semibold text-accent-700">
                  {open} open roles
                </span>
              </div>

              <div className="mt-3 flex flex-wrap gap-2">
                <Chip>{c.stage}</Chip>
                <Chip>{c.focus}</Chip>
                <Chip>{c.engineers} engineers</Chip>
              </div>

              <ul className="mt-6">
                <OrgTree node={c.org} root />
              </ul>

              <div className="mt-auto border-t border-line pt-5">
                <p className="text-xs font-semibold uppercase tracking-[0.1em] text-ink-subtle">
                  Hiring gaps
                </p>
                <ul className="mt-3 flex flex-wrap gap-x-5 gap-y-2">
                  {c.openRoles.map((r) => (
                    <li key={r.role} className="flex items-center gap-2 text-sm text-ink">
                      <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                      {r.role}
                      {r.count && <span className="text-ink-subtle">×{r.count}</span>}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.article>
          );
        })}
      </RevealGroup>

      <Reveal>
        <p className="mt-6 text-sm text-ink-subtle">{PROFILES_CAPTION}</p>
      </Reveal>
    </Section>
  );
}
