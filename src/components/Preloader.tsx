"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

// SVG logo for the preloader (draws itself)
function SLMonogram() {
  return (
    <svg width="80" height="80" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
      {/* S */}
      <motion.path
        d="M14 24C14 18 18 14 28 14C38 14 42 18 42 24C42 30 38 34 28 38C18 42 14 46 14 52C14 58 18 62 28 62H42"
        stroke="#1A1814"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 1.2, ease: "easeInOut" }}
      />
      {/* L */}
      <motion.path
        d="M52 14V62H70"
        stroke="#1A1814"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        fill="none"
        initial={{ pathLength: 0 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 0.8, ease: "easeInOut", delay: 0.8 }}
      />
    </svg>
  );
}

export function Preloader({ onDone }: { onDone: () => void }) {
  const [phase, setPhase] = useState<"drawing" | "label" | "exit">("drawing");

  useEffect(() => {
    const t1 = setTimeout(() => setPhase("label"), 1800);
    const t2 = setTimeout(() => setPhase("exit"), 2800);
    const t3 = setTimeout(() => onDone(), 3400);
    return () => { clearTimeout(t1); clearTimeout(t2); clearTimeout(t3); };
  }, [onDone]);

  return (
    <AnimatePresence>
      {phase !== "exit" ? (
        <motion.div
          key="preloader"
          className="fixed inset-0 z-[9999] bg-[var(--cream)] flex flex-col items-center justify-center gap-6"
          exit={{ clipPath: "inset(0 0 100% 0)", transition: { duration: 0.6, ease: [0.76, 0, 0.24, 1] } }}
        >
          <SLMonogram />
          <AnimatePresence>
            {phase === "label" && (
              <motion.p
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                className="font-mono text-xs text-[var(--smoke)] tracking-[0.3em] uppercase"
              >
                SaumyLabs
              </motion.p>
            )}
          </AnimatePresence>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
