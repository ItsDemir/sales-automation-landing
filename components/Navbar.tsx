"use client";

import { useEffect, useState } from "react";

const LINKS = [
  { href: "#how", label: "How it works" },
  { href: "#features", label: "Why Momentum" },
  { href: "#pricing", label: "Pricing" },
];

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
          ? "border-b border-white/10 bg-ink-900/80 backdrop-blur-xl"
          : "border-b border-transparent bg-transparent"
      }`}
    >
      <nav className="mx-auto flex h-16 max-w-wide items-center justify-between px-6 lg:px-10">
        <a
          href="#top"
          className="font-display text-lg font-semibold tracking-tightest text-chalk"
        >
          Momentum<span className="text-accent">.</span>
        </a>

        <div className="hidden items-center gap-9 md:flex">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="text-sm text-chalk-muted transition-colors hover:text-chalk"
            >
              {l.label}
            </a>
          ))}
        </div>

        <a
          href="#contact"
          className="group inline-flex items-center gap-2 rounded-full border border-white/20 px-4 py-2 text-sm text-chalk transition-colors hover:border-accent hover:text-accent"
        >
          Book a demo
          <span className="transition-transform duration-300 group-hover:translate-x-0.5">
            →
          </span>
        </a>
      </nav>
    </header>
  );
}
