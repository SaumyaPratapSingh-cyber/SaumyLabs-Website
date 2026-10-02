"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Preloader } from "@/components/Preloader";
import { Marquee } from "@/components/Marquee";
import { ServicesGrid } from "@/components/BentoGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { CommunitySection } from "@/components/CommunitySection";
import { CTABand } from "@/components/CTABand";
import { FAQSection } from "@/components/FAQSection";
import { StatsBand } from "@/components/StatsBand";
import { PortfolioSection } from "@/components/PortfolioSection";
import Link from "next/link";

// ─── Rotating words ────────────────────────────────
const WORDS = ["Startups.", "Founders.", "Creators.", "Brands."];

function WordRotator() {
  const [index, setIndex] = useState(0);

  // Rotate every 2.5s
  if (typeof window !== "undefined") {
    // noop in SSR
  }

  return (
    <span className="relative inline-block overflow-hidden h-[1.05em] align-bottom">
      <AnimatePresence mode="wait" initial={false}>
        <motion.span
          key={index}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          exit={{ y: "-100%", opacity: 0 }}
          transition={{ duration: 0.45, ease: [0.76, 0, 0.24, 1] }}
          className="block text-[var(--smoke)] italic font-display"
          onAnimationComplete={() => {
            setTimeout(() => setIndex((i) => (i + 1) % WORDS.length), 2000);
          }}
        >
          {WORDS[index]}
        </motion.span>
      </AnimatePresence>
    </span>
  );
}

// ─── Hero SVG Art ───────────────────────────────────
function HeroArt() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <svg
        viewBox="0 0 480 480"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full max-w-[420px] opacity-90"
      >
        {/* Large outer circle */}
        <circle cx="240" cy="240" r="200" stroke="#E8E2D9" strokeWidth="1" />
        {/* Medium circle */}
        <circle cx="240" cy="240" r="140" stroke="#E8E2D9" strokeWidth="1" />
        {/* Inner circle — filled parchment */}
        <circle cx="240" cy="240" r="80" fill="#F5F0E8" />
        {/* Diagonal lines */}
        <line x1="80" y1="80" x2="400" y2="400" stroke="#E8E2D9" strokeWidth="1" />
        <line x1="400" y1="80" x2="80" y2="400" stroke="#E8E2D9" strokeWidth="1" />
        {/* Accent arc top */}
        <path
          d="M 240 40 A 200 200 0 0 1 440 240"
          stroke="#CEFF00"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.6"
        />
        {/* Quarter-circle bottom left */}
        <path
          d="M 40 240 A 200 200 0 0 0 240 440"
          stroke="#B693FE"
          strokeWidth="2"
          strokeLinecap="round"
          opacity="0.4"
        />
        {/* Accent dots */}
        <circle cx="240" cy="40" r="5" fill="#CEFF00" opacity="0.8" />
        <circle cx="440" cy="240" r="4" fill="#B693FE" opacity="0.6" />
        <circle cx="240" cy="440" r="3" fill="#E8E2D9" />
        {/* Small floating square (rotated) */}
        <rect
          x="215"
          y="215"
          width="50"
          height="50"
          rx="8"
          fill="#0F0F0F"
          opacity="0.06"
          transform="rotate(15 240 240)"
        />
        {/* SL text in center */}
        <text
          x="240"
          y="248"
          textAnchor="middle"
          fontFamily="serif"
          fontSize="28"
          fontWeight="700"
          fill="#1A1814"
          opacity="0.8"
        >
          SL
        </text>
      </svg>

      {/* Floating tag chips */}
      <div className="absolute top-12 left-4 font-mono text-[10px] text-[var(--smoke)] border border-[var(--stone)] bg-[var(--cream)]/80 backdrop-blur-sm rounded-full px-3 py-1 whitespace-nowrap">
        Next.js • React Native
      </div>
      <div className="absolute bottom-16 right-4 font-mono text-[10px] text-[var(--smoke)] border border-[var(--stone)] bg-[var(--cream)]/80 backdrop-blur-sm rounded-full px-3 py-1 whitespace-nowrap">
        Est. 2024 • India
      </div>
      <div className="absolute top-1/2 -right-2 -translate-y-1/2 font-mono text-[10px] text-[var(--smoke)] border border-[var(--stone)] bg-[var(--cream)]/80 backdrop-blur-sm rounded-full px-3 py-1 whitespace-nowrap hidden xl:block">
        127+ projects
      </div>
    </div>
  );
}

// ─── Trust logos (text only, no images) ─────────────
const TRUSTED_LOGOS = ["Vercel", "Framer", "Linear", "Notion", "Figma", "Supabase"];

export default function Home() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <Preloader onDone={() => setLoaded(true)} />

      <AnimatePresence>
        {loaded && (
          <motion.main
            key="main"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex flex-col min-h-screen"
          >
            {/* ═══ HERO ══════════════════════════════════════════ */}
            <section className="relative min-h-screen flex items-center pt-24 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full">
              {/* Left col */}
              <div className="w-full lg:w-1/2 flex flex-col">
                {/* Status pill */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="inline-flex items-center gap-2 mb-10 w-fit"
                >
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500" />
                  </span>
                  <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.15em] uppercase">
                    Open for projects — 2026
                  </span>
                </motion.div>

                {/* Headline */}
                <div className="overflow-hidden mb-2">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
                    className="font-heading font-bold text-[var(--ink)] leading-[0.95] tracking-tight"
                    style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
                  >
                    We build
                  </motion.h1>
                </div>
                <div className="overflow-hidden mb-2">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.22 }}
                    className="font-heading font-bold text-[var(--ink)] leading-[0.95] tracking-tight"
                    style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
                  >
                    for
                  </motion.h1>
                </div>
                <div className="overflow-hidden mb-8">
                  <motion.h1
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.29 }}
                    className="font-heading font-bold leading-[0.95] tracking-tight"
                    style={{ fontSize: "clamp(56px, 8vw, 112px)" }}
                  >
                    <WordRotator />
                  </motion.h1>
                </div>

                {/* Subline */}
                <motion.p
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.5 }}
                  className="text-[var(--smoke)] max-w-md text-lg leading-relaxed font-light mb-10"
                >
                  Premium engineering, design &amp; growth. We turn ambitious ideas into digital products that dominate their niche.
                </motion.p>

                {/* CTAs */}
                <motion.div
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.65 }}
                  className="flex flex-wrap gap-3 mb-16"
                >
                  <Link
                    href="#services"
                    className="group flex items-center gap-2 px-7 py-4 rounded-full bg-[var(--jet)] text-white font-medium hover:bg-[var(--ink)] active:scale-95 transition-all"
                  >
                    Start a project
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                  </Link>
                  <Link
                    href="#work"
                    className="group flex items-center gap-2 px-7 py-4 rounded-full border border-[var(--stone)] text-[var(--smoke)] hover:bg-[var(--parchment)] hover:text-[var(--ink)] active:scale-95 transition-all"
                  >
                    View our work
                    <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                  </Link>
                </motion.div>

                {/* Trusted by */}
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.5, delay: 0.8 }}
                  className="flex flex-wrap items-center gap-3"
                >
                  <span className="font-mono text-[10px] text-[var(--ghost)] tracking-[0.2em] uppercase">
                    Tech stack
                  </span>
                  {TRUSTED_LOGOS.map((name) => (
                    <span
                      key={name}
                      className="font-mono text-xs text-[var(--ghost)] border border-[var(--stone)] rounded-full px-3 py-1 hover:border-[var(--ink)] hover:text-[var(--ink)] transition-colors cursor-default"
                    >
                      {name}
                    </span>
                  ))}
                </motion.div>
              </div>

              {/* Right col — SVG Art */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.3 }}
                className="hidden lg:flex w-1/2 h-[520px] items-center justify-center"
              >
                <HeroArt />
              </motion.div>
            </section>

            {/* ═══ MARQUEE ══════════════════════════════════════ */}
            <Marquee />

            {/* ═══ STATS BAND ═══════════════════════════════════ */}
            <StatsBand />

            {/* ═══ SERVICES ══════════════════════════════════════ */}
            <ServicesGrid />

            {/* ═══ PROCESS ══════════════════════════════════════ */}
            <ProcessSection />

            {/* ═══ PORTFOLIO ══════════════════════════════════════ */}
            <PortfolioSection />

            {/* ═══ TESTIMONIALS ══════════════════════════════════ */}
            <Testimonials />

            {/* ═══ FAQ ════════════════════════════════════════════ */}
            <FAQSection />

            {/* ═══ COMMUNITY ══════════════════════════════════════ */}
            <CommunitySection />

            {/* ═══ CTA BAND ══════════════════════════════════════ */}
            <CTABand />

            {/* ═══ FOOTER ════════════════════════════════════════ */}
            <footer className="border-t border-[var(--stone)] bg-[var(--parchment)]">
              <div className="max-w-7xl mx-auto px-6 md:px-12 py-12">
                <div className="flex flex-col md:flex-row justify-between items-start gap-10">
                  {/* Brand */}
                  <div className="max-w-xs">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="relative w-8 h-8 shrink-0">
                        <div className="absolute inset-0 bg-[var(--jet)] rounded-sm rotate-45" />
                        <div className="absolute inset-[5px] bg-[var(--matcha)] rounded-sm" />
                      </div>
                      <span className="font-heading font-bold text-[var(--ink)] text-lg">SaumyLabs</span>
                    </div>
                    <p className="font-mono text-xs text-[var(--ghost)] leading-relaxed">
                      Building ambitious digital products for founders who refuse to be average.
                    </p>
                  </div>

                  {/* Links */}
                  <div className="grid grid-cols-2 md:grid-cols-3 gap-8 text-sm">
                    <div>
                      <p className="font-mono text-[10px] text-[var(--ghost)] tracking-[0.2em] uppercase mb-4">Agency</p>
                      {["Services", "Process", "Work", "Pricing"].map((l) => (
                        <Link key={l} href={`#${l.toLowerCase()}`} className="block text-[var(--smoke)] hover:text-[var(--ink)] transition-colors py-1">{l}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[var(--ghost)] tracking-[0.2em] uppercase mb-4">Community</p>
                      {["Instagram", "Newsletter", "Hackathons", "Resources"].map((l) => (
                        <Link key={l} href="#" className="block text-[var(--smoke)] hover:text-[var(--ink)] transition-colors py-1">{l}</Link>
                      ))}
                    </div>
                    <div>
                      <p className="font-mono text-[10px] text-[var(--ghost)] tracking-[0.2em] uppercase mb-4">Contact</p>
                      <a href="mailto:hello@saumylabs.xyz" className="block text-[var(--smoke)] hover:text-[var(--ink)] transition-colors py-1">hello@saumylabs.xyz</a>
                      <Link href="#contact" className="block text-[var(--smoke)] hover:text-[var(--ink)] transition-colors py-1">Book a call</Link>
                    </div>
                  </div>
                </div>

                <div className="mt-12 pt-6 border-t border-[var(--stone)] flex flex-col sm:flex-row justify-between items-center gap-3">
                  <p className="font-mono text-[10px] text-[var(--ghost)] tracking-wider uppercase">© 2026 SaumyLabs. All rights reserved.</p>
                  <p className="font-mono text-[10px] text-[var(--ghost)]">Made with ♥ in India</p>
                </div>
              </div>
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </>
  );
}
