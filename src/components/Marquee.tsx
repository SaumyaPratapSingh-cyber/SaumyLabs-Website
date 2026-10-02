"use client";

const TECH_STACK = [
  "Next.js", "React Native", "MongoDB", "Figma", "Tailwind CSS",
  "Node.js", "GraphQL", "PostgreSQL", "Web3", "TypeScript", "AWS", "Framer"
];

export function Marquee() {
  const items = [...TECH_STACK, ...TECH_STACK, ...TECH_STACK];

  return (
    <div className="w-full py-12 border-y border-[var(--stone)] bg-[var(--parchment)] relative overflow-hidden">
      {/* Edge fades */}
      <div className="absolute inset-y-0 left-0 w-20 md:w-32 bg-gradient-to-r from-[var(--parchment)] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-20 md:w-32 bg-gradient-to-l from-[var(--parchment)] to-transparent z-10 pointer-events-none" />

      {/* Row 1 — Left */}
      <div className="overflow-hidden mb-3">
        <div className="flex whitespace-nowrap marquee-left">
          {items.map((tech, i) => (
            <div key={i} className="inline-flex items-center shrink-0">
              <span className="text-4xl md:text-5xl font-heading font-bold text-[var(--ink)]/10 uppercase mx-6 hover:text-[var(--ink)]/30 transition-colors cursor-default">
                {tech}
              </span>
              <span className="text-[var(--matcha)] mx-2 text-xl" style={{ filter: "brightness(0.5)" }}>•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 — Right */}
      <div className="overflow-hidden">
        <div className="flex whitespace-nowrap marquee-right">
          {[...items].reverse().map((tech, i) => (
            <div key={i} className="inline-flex items-center shrink-0">
              <span className="text-4xl md:text-5xl font-heading font-bold text-[var(--ink)]/10 uppercase mx-6 hover:text-[var(--lavender)]/50 transition-colors cursor-default">
                {tech}
              </span>
              <span className="text-[var(--lavender)] mx-2 text-xl" style={{ opacity: 0.4 }}>•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
