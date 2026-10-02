"use client";

const TECH_STACK = [
  "Next.js", "Tailwind CSS", "Framer Motion", "React Native", 
  "MongoDB", "Figma", "Web3", "PostgreSQL", "Node.js", "GraphQL"
];

export function Marquee() {
  return (
    <div className="w-full py-16 bg-[#FDFBF7] overflow-hidden border-y border-black/5 relative flex flex-col gap-6">
      {/* Light mode gradient masks for smooth fade out on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-[#FDFBF7] to-transparent z-10 pointer-events-none" />
      
      {/* Row 1 - Moves Left (Pure CSS Animation for 0 Lag) */}
      <div className="flex w-[200%] md:w-[150%] lg:w-[120%] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-left">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div key={i} className="flex items-center mx-8 group cursor-default">
              <span className="text-5xl md:text-7xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/30 uppercase group-hover:from-black group-hover:to-black transition-colors duration-300">
                {tech}
              </span>
              <span className="mx-8 text-[var(--color-matcha)] text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>

      {/* Row 2 - Moves Right (Pure CSS Animation for 0 Lag) */}
      <div className="flex w-[200%] md:w-[150%] lg:w-[120%] overflow-hidden">
        <div className="flex whitespace-nowrap animate-marquee-right">
          {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].reverse().map((tech, i) => (
            <div key={i} className="flex items-center mx-8 group cursor-default">
              <span className="text-5xl md:text-7xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/30 uppercase group-hover:from-[var(--color-lavender)] group-hover:to-[var(--color-lavender)] transition-colors duration-300">
                {tech}
              </span>
              <span className="mx-8 text-[var(--color-lavender)] text-2xl">•</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
