"use client";

import { motion } from "framer-motion";
import { Marquee } from "@/components/Marquee";
import { BentoGrid } from "@/components/BentoGrid";
import { ProcessSection } from "@/components/ProcessSection";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen selection:bg-[var(--color-matcha)] selection:text-black">
      {/* Hero Section */}
      <section className="relative flex flex-col items-center justify-center min-h-screen overflow-hidden pt-20 pb-32">
        {/* Very subtle background mesh/gradient for light mode */}
        <div className="absolute inset-0 z-0 flex items-center justify-center opacity-40">
          <div className="w-[600px] h-[600px] bg-gradient-to-tr from-[var(--color-matcha)] to-[var(--color-lavender)] rounded-full blur-[120px] mix-blend-multiply opacity-20" />
        </div>

        <div className="z-10 flex flex-col items-center text-center px-6 mt-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 rounded-full border border-black/10 bg-white/50 backdrop-blur-md shadow-sm"
          >
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.5)]" />
            <span className="text-sm font-medium tracking-wide text-gray-700 uppercase">
              Now taking projects for 2026
            </span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-syne text-6xl md:text-8xl lg:text-9xl font-bold tracking-tight mb-6 max-w-5xl leading-[0.9] text-black"
          >
            We build the internet.
            <br />
            <span className="text-gray-400">You take the credit.</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-gray-600 max-w-2xl mb-12 font-inter font-light"
          >
            The premium digital agency by SaumyLabs. Bridging authentic community trust with elite B2B and startup engineering.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Link href="#services" className="relative group overflow-hidden rounded-full px-8 py-4 bg-black text-white font-semibold tracking-wide hover:scale-105 transition-transform duration-300 shadow-xl flex items-center justify-center gap-2">
              <div className="absolute inset-0 bg-[var(--color-matcha)] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out" />
              <span className="relative font-inter uppercase group-hover:text-black transition-colors z-10 flex items-center gap-2">
                Explore Services <ArrowUpRight className="w-4 h-4" />
              </span>
            </Link>
            
            <Link href="#contact" className="rounded-full px-8 py-4 bg-transparent border border-black/20 text-black font-semibold tracking-wide hover:bg-black/5 transition-colors duration-300 flex items-center justify-center">
              <span className="font-inter uppercase">Book a Call</span>
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Infinite Tech Marquee */}
      <Marquee />

      {/* Bento Grid Services Section */}
      <BentoGrid />
      
      {/* How We Do It Section */}
      <ProcessSection />
      
      {/* Footer */}
      <footer className="w-full border-t border-black/10 py-12 text-center text-gray-500 mt-20 bg-white/50 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2">
             <div className="w-6 h-6 rounded-full bg-[var(--color-matcha)]" />
             <span className="font-syne font-bold text-black">SaumyLabs</span>
          </div>
          <p className="font-inter text-sm">© 2026 SaumyLabs. All rights reserved.</p>
          <div className="flex gap-4">
            <Link href="#" className="hover:text-black transition-colors">Instagram</Link>
            <Link href="#" className="hover:text-black transition-colors">Twitter</Link>
            <Link href="#" className="hover:text-black transition-colors">LinkedIn</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
