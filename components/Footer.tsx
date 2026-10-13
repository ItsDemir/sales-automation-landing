import {
  CALENDLY_URL,
  CONTACT_EMAIL,
  LEAD_MAGNET_URL,
  LEAD_MAGNET_EXTERNAL,
} from "@/lib/site";

const LINKS = [
  { href: "#why-healthcare", label: "Why healthcare tech" },
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Why Momentum" },
  { href: "#pricing", label: "Pricing" },
  { href: "#contact", label: "Book a demo" },
];

export default function Footer() {
  return (
    <footer className="border-t border-white/10">
      <div className="mx-auto max-w-wide px-6 py-16 lg:px-10">
        <div className="flex flex-col justify-between gap-12 md:flex-row">
          <div className="max-w-sm">
            <a
              href="#top"
              className="font-display text-lg font-semibold tracking-tightest text-chalk"
            >
              Momentum<span className="text-accent">.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed text-chalk-muted">
              Engineering and product hiring pipeline for healthcare tech. We
              map AI diagnostics companies, pitch the engineers you want, and
              hand you the ones ready to talk.
            </p>
          </div>

          <nav className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-chalk-faint">
              Navigate
            </span>
            {LINKS.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-chalk-muted transition-colors hover:text-chalk"
              >
                {l.label}
              </a>
            ))}
          </nav>

          <div className="flex flex-col gap-3">
            <span className="text-xs uppercase tracking-widest text-chalk-faint">
              Contact
            </span>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="text-sm text-chalk-muted transition-colors hover:text-chalk"
            >
              {CONTACT_EMAIL}
            </a>
            <a
              href={CALENDLY_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-chalk-muted transition-colors hover:text-chalk"
            >
              Book a demo →
            </a>
            <a
              href={LEAD_MAGNET_URL}
              {...(LEAD_MAGNET_EXTERNAL && {
                target: "_blank",
                rel: "noopener noreferrer",
              })}
              className="text-sm text-accent transition-colors hover:text-accent-soft"
            >
              Free AI diagnostics companies list ↓
            </a>
          </div>
        </div>

        <div className="mt-16 flex flex-col justify-between gap-4 border-t border-white/10 pt-8 text-xs text-chalk-faint sm:flex-row">
          <p>© {new Date().getFullYear()} Momentum. All rights reserved.</p>
          <p>Built for healthcare tech teams who&apos;d rather be interviewing.</p>
        </div>
      </div>
    </footer>
  );
}
