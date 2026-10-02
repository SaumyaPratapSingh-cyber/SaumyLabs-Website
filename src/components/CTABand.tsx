"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

export function CTABand() {
  return (
    <section id="contact" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      <ScrollReveal>
        <div className="relative overflow-hidden rounded-[2.5rem] bg-[var(--jet)] p-12 md:p-20 text-center">
          {/* Decorative glows */}
          <div className="absolute top-0 left-1/4 w-64 h-64 bg-[var(--matcha)] rounded-full blur-[100px] opacity-10 pointer-events-none" />
          <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-[var(--lavender)] rounded-full blur-[100px] opacity-10 pointer-events-none" />

          <div className="relative z-10">
            <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase border border-white/10 rounded-full px-4 py-1.5">
              Let&apos;s build together
            </span>

            <h2 className="mt-8 font-display font-bold text-white leading-[1.0]" style={{ fontSize: "clamp(40px, 7vw, 100px)" }}>
              Ready to build
              <br />
              something legendary?
            </h2>

            <p className="mt-6 text-white/50 max-w-md mx-auto text-lg font-light">
              Tell us about your project and we&apos;ll get back to you within 24 hours.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="mailto:hello@saumylabs.xyz"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-[var(--matcha)] text-[var(--jet)] font-semibold hover:scale-105 transition-transform duration-300"
              >
                hello@saumylabs.xyz
                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
              <Link
                href="https://cal.com/saumylabs"
                target="_blank"
                rel="noopener"
                className="group flex items-center justify-center gap-2 px-8 py-4 rounded-full border border-white/20 text-white hover:bg-white/10 transition-colors duration-300"
              >
                Book a Free Call
              </Link>
            </div>
          </div>
        </div>
      </ScrollReveal>
    </section>
  );
}
