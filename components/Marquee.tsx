const PHRASES = [
  "Prospect research",
  "Personalized drafting",
  "Multi-touch sequences",
  "Deliverability",
  "Reply handling",
  "Weekly reporting",
  "Qualified pipeline",
];

export default function Marquee() {
  const strip = [...PHRASES, ...PHRASES];
  return (
    <div className="border-y border-white/10 py-5">
      <div className="no-scrollbar flex overflow-hidden">
        <div className="flex shrink-0 animate-ticker items-center gap-8 whitespace-nowrap pr-8">
          {strip.map((p, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-sm uppercase tracking-widest text-chalk-faint">
                {p}
              </span>
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
        <div
          aria-hidden
          className="flex shrink-0 animate-ticker items-center gap-8 whitespace-nowrap pr-8"
        >
          {strip.map((p, i) => (
            <span key={i} className="flex items-center gap-8">
              <span className="text-sm uppercase tracking-widest text-chalk-faint">
                {p}
              </span>
              <span className="text-accent">/</span>
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
