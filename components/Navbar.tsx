"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#why-healthcare", label: "Why healthcare" },
  { href: "#mapping", label: "Company map" },
  { href: "#how", label: "How it works" },
  { href: "#pricing", label: "Pricing" },
];

/* White on the teal hero, then a light bar once the page scrolls. */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "border-b border-line bg-surface/95 backdrop-blur"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-wide items-center justify-between px-5 sm:px-6 lg:px-10">
        <a
          href="#top"
          className={`text-lg font-bold tracking-tight ${
            scrolled ? "text-ink" : "text-white"
          }`}
        >
          Momentum<span className="text-secondary">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className={`text-sm font-medium transition-colors ${
                scrolled
                  ? "text-ink-muted hover:text-primary-700"
                  : "text-primary-50 hover:text-white"
              }`}
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className={`inline-flex items-center rounded-lg px-4 py-2 text-sm font-semibold transition-colors ${
            scrolled
              ? "bg-primary-700 text-white hover:bg-primary-800"
              : "border border-white/50 text-white hover:bg-white hover:text-primary-800"
          }`}
        >
          Book a demo
        </a>
      </nav>
    </header>
  );
}
