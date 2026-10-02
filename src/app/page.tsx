"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { Marquee } from "@/components/Marquee";
import { ServicesGrid } from "@/components/BentoGrid";
import { ProcessSection } from "@/components/ProcessSection";
import { Testimonials } from "@/components/Testimonials";
import { CommunitySection } from "@/components/CommunitySection";
import { CTABand } from "@/components/CTABand";

const trustedBy = ["Figma", "Linear", "Vercel", "Framer", "Notion", "Superhuman"];

export default function Home() {
  return (
    <main className="relative flex flex-col min-h-screen">

      {/* ===== HERO ===== */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto w-full overflow-hidden">

        {/* Abstract geometric shape (right side, pure CSS) */}
        <div className="absolute top-1/2 right-0 -translate-y-1/2 w-[480px] h-[480px] pointer-events-none hidden lg:block" aria-hidden>
          <div className="hero-shape w-full h-full rounded-full border border-[var(--stone)] opacity-40" />
          <div className="absolute inset-10 rounded-full border border-[var(--stone)] opacity-30" />
          <div className="absolute inset-20 rounded-full border border-[var(--stone)] opacity-20" />
          <div className="absolute inset-[120px] rounded-full bg-[var(--parchment)]" />
          {/* Dot accents */}
          <div className="absolute top-8 left-1/2 -translate-x-1/2 w-3 h-3 rounded-full bg-[var(--matcha)]" />
          <div className="absolute bottom-16 right-16 w-2 h-2 rounded-full bg-[var(--lavender)]" />
        </div>

        <div className="relative z-10 max-w-3xl">
          {/* Mono label */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            className="inline-flex items-center gap-2.5 mb-8"
          >
            <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
            <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase">
              Available for new projects — 2026
            </span>
          </motion.div>

          {/* Main headline — editorial serif + heading mix */}
          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.05 }}
            className="font-heading font-bold text-[var(--ink)] leading-[1.0] tracking-tight mb-2"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            We build
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
            className="font-display font-bold text-[var(--smoke)] leading-[1.0] tracking-tight mb-2 italic"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            the internet.
          </motion.h1>

          <motion.h1
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
            className="font-heading font-bold text-[var(--ink)] leading-[1.0] tracking-tight"
            style={{ fontSize: "clamp(52px, 9vw, 120px)" }}
          >
            You take the credit.
          </motion.h1>

          {/* Subheadline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.35 }}
            className="mt-8 text-[var(--smoke)] max-w-xl text-lg leading-relaxed font-light"
          >
            Premium engineering, design, and growth for founders who refuse to be average. From idea to launch in weeks — not months.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10 flex flex-wrap gap-3"
          >
            <Link
              href="#services"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full bg-[var(--jet)] text-white font-medium hover:bg-[var(--ink)] transition-colors"
            >
              Explore services
              <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </Link>
            <Link
              href="https://instagram.com/saumylabs"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--stone)] text-[var(--smoke)] hover:bg-[var(--parchment)] hover:text-[var(--ink)] transition-colors"
            >
              @saumylabs
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Link>
          </motion.div>
        </div>

        {/* Trusted By logos (text-only, no images = fast) */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="relative z-10 mt-24 flex flex-wrap items-center gap-3"
        >
          <span className="font-mono text-[10px] text-[var(--ghost)] tracking-[0.2em] uppercase mr-2">
            Builders using our stack
          </span>
          {trustedBy.map((name) => (
            <span
              key={name}
              className="font-mono text-xs text-[var(--ghost)] border border-[var(--stone)] rounded-full px-3 py-1"
            >
              {name}
            </span>
          ))}
        </motion.div>
      </section>

      {/* ===== MARQUEE ===== */}
      <Marquee />

      {/* ===== SERVICES ===== */}
      <ServicesGrid />

      {/* ===== PROCESS ===== */}
      <ProcessSection />

      {/* ===== TESTIMONIALS ===== */}
      <Testimonials />

      {/* ===== COMMUNITY ===== */}
      <CommunitySection />

      {/* ===== CTA BAND ===== */}
      <CTABand />

      {/* ===== FOOTER ===== */}
      <footer className="border-t border-[var(--stone)] bg-[var(--parchment)]">
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
          {/* Logo + Tagline */}
          <div className="flex flex-col gap-2">
            <div className="flex items-center gap-3">
              <div className="relative w-7 h-7">
                <div className="absolute inset-0 bg-[var(--jet)] rounded-sm rotate-45" />
                <div className="absolute inset-[4px] bg-[var(--matcha)] rounded-sm" />
              </div>
              <span className="font-heading font-bold text-[var(--ink)]">SaumyLabs</span>
            </div>
            <p className="font-mono text-xs text-[var(--ghost)]">Building the internet, one project at a time.</p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap gap-6 text-sm text-[var(--smoke)]">
            {["Services", "Process", "Work", "Community", "Contact"].map((l) => (
              <Link key={l} href={`#${l.toLowerCase()}`} className="hover:text-[var(--ink)] transition-colors">
                {l}
              </Link>
            ))}
          </nav>

          {/* Legal */}
          <p className="font-mono text-[10px] text-[var(--ghost)] tracking-wider uppercase">
            © 2026 SaumyLabs
          </p>
        </div>
      </footer>
    </main>
  );
}
