"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "Next.js", "Tailwind CSS", "Framer Motion", "React Native", 
  "MongoDB", "Figma", "Web3", "PostgreSQL", "Node.js", "GraphQL"
];

export function Marquee() {
  return (
    <div className="w-full py-12 bg-[var(--background)] overflow-hidden border-y border-white/5 relative flex flex-col gap-4">
      <div className="absolute inset-0 bg-gradient-to-r from-[var(--background)] via-transparent to-[var(--background)] z-10 pointer-events-none" />
      
      {/* Row 1 - Moves Left */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase">
                {tech}
              </span>
              <span className="mx-8 text-[var(--color-matcha)]">•</span>
            </div>
          ))}
        </motion.div>
      </div>

      {/* Row 2 - Moves Right */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["-50%", "0%"] }}
          transition={{ ease: "linear", duration: 30, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...TECH_STACK, ...TECH_STACK].reverse().map((tech, i) => (
            <div key={i} className="flex items-center mx-8">
              <span className="text-4xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-white/20 to-white/5 uppercase">
                {tech}
              </span>
              <span className="mx-8 text-[var(--color-lavender)]">•</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
