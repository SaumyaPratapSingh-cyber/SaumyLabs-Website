"use client";

import { motion } from "framer-motion";

const TECH_STACK = [
  "Next.js", "Tailwind CSS", "Framer Motion", "React Native", 
  "MongoDB", "Figma", "Web3", "PostgreSQL", "Node.js", "GraphQL"
];

export function Marquee() {
  return (
    <div className="w-full py-12 bg-white overflow-hidden border-y border-black/5 relative flex flex-col gap-4">
      {/* Light mode gradient masks for smooth fade out on edges */}
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      {/* Row 1 - Moves Left */}
      <div className="flex w-full overflow-hidden">
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ ease: "linear", duration: 25, repeat: Infinity }}
          className="flex whitespace-nowrap"
        >
          {[...TECH_STACK, ...TECH_STACK].map((tech, i) => (
            <div key={i} className="flex items-center mx-8 group cursor-default">
              <span className="text-4xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/30 uppercase group-hover:from-black group-hover:to-black transition-colors duration-300">
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
            <div key={i} className="flex items-center mx-8 group cursor-default">
              <span className="text-4xl md:text-6xl font-syne font-bold text-transparent bg-clip-text bg-gradient-to-b from-black/80 to-black/30 uppercase group-hover:from-[var(--color-lavender)] group-hover:to-[var(--color-lavender)] transition-colors duration-300">
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
