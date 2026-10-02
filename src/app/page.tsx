"use client";

import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden">
      {/* Background radial gradient for depth */}
      <div className="absolute inset-0 z-0 flex items-center justify-center">
        <div className="w-[800px] h-[800px] bg-white/[0.02] rounded-full blur-[100px] mix-blend-screen" />
      </div>

      <div className="z-10 flex flex-col items-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-white/10 bg-white/5 backdrop-blur-md"
        >
          <span className="w-2 h-2 rounded-full bg-[var(--color-matcha)] animate-pulse" />
          <span className="text-sm font-medium tracking-wide text-gray-300 uppercase">
            Now taking projects
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-syne text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 max-w-5xl leading-[0.9]"
        >
          We build the internet.
          <br />
          <span className="text-gray-500">You take the credit.</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-400 max-w-2xl mb-12 font-inter font-light"
        >
          The premium digital agency by SaumyLabs. Bridging authentic community trust with elite B2B and startup engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <button className="relative group overflow-hidden rounded-full px-8 py-4 bg-[var(--color-matcha)] text-black font-semibold tracking-wide hover:scale-105 transition-transform duration-300">
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
            <span className="relative font-inter uppercase">Start Your Project</span>
          </button>
        </motion.div>
      </div>
    </main>
  );
}
