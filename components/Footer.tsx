import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  LEAD_MAGNET_URL,
  LEAD_MAGNET_EXTERNAL,
} from "@/lib/site";

const LINKS = [
  { href: "#why-healthcare", label: "Why healthcare tech" },
  { href: "#mapping", label: "Company map" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Why Momentum" },
  { href: "#pricing", label: "Pricing" },
];

export default function Footer() {
  return (
    <footer className="bg-surface">
      <div className="mx-auto max-w-wide px-5 py-16 sm:px-6 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <a href="#top" className="text-lg font-bold tracking-tight text-ink">
              Momentum<span className="text-secondary">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-ink-muted">
              Engineering and product hiring pipeline for healthcare tech. We
              map AI diagnostics companies, pitch the engineers you want, and
              hand you the ones ready to talk.
            </p>
          </div>

          <nav className="flex flex-col gap-3" aria-label="Footer">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
              Navigate
            </span>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-ink-muted transition-colors hover:text-primary-700"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs font-semibold uppercase tracking-[0.12em] text-ink-subtle">
              Contact
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-ink-muted transition-colors hover:text-primary-700"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-ink-muted transition-colors hover:text-primary-700"
            >
              Book a demo
            </a>
            <a
              href={LEAD_MAGNET_URL}
              {...(LEAD_MAGNET_EXTERNAL && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-sm font-medium text-primary-700 transition-colors hover:text-primary-800"
            >
              Free AI diagnostics companies list
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-line pt-8 text-xs text-ink-subtle sm:flex-row">
          <p>© {new Date().getFullYear()} Momentum. All rights reserved.</p>
          <p>Built for healthcare tech teams who&apos;d rather be interviewing.</p>
        </div>
      </div>
    </footer>
  );
}
