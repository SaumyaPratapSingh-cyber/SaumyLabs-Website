"use client";

import { ArrowRight } from "lucide-react";

function InstagramIcon({ className }: { className?: string }) {
  return (
    <svg className={className} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { num: "10K+", label: "Community Members" },
  { num: "127+", label: "Projects Delivered" },
  { num: "4.9★", label: "Client Rating" },
  { num: "6 Wks", label: "Avg. Time to Launch" },
];

const mockPosts = [
  { tag: "Hackathon", title: "MLH Global Hack 2025 — Register Now", emoji: "🏆" },
  { tag: "Tech News", title: "Next.js 17 just dropped — here's what changed", emoji: "⚡" },
  { tag: "Resources", title: "The ultimate free UI kit collection for 2025", emoji: "🎨" },
  { tag: "Community", title: "10,000 builders just joined the lab. Thank you.", emoji: "🎉" },
];

export function CommunitySection() {
  return (
    <section id="community" className="py-24 md:py-36 bg-[var(--jet)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-mono text-xs text-white/40 tracking-[0.2em] uppercase border border-white/10 rounded-full px-4 py-1.5">
            04 / Community
          </span>
        </ScrollReveal>

        <div className="mt-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
          <ScrollReveal delay={1}>
            <h2 className="font-heading font-bold text-white leading-[1.05]" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
              Not just an agency.
              <br />
              <em className="font-display not-italic text-white/40">A movement.</em>
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={2}>
            <Link
              href="https://instagram.com/saumylabs"
              target="_blank"
              rel="noopener"
              className="group flex items-center gap-2 px-6 py-3 rounded-full border border-white/20 text-white/70 hover:bg-white hover:text-[var(--jet)] hover:border-white transition-all duration-300 text-sm font-medium"
            >
              <InstagramIcon className="w-4 h-4" />
              Follow @saumylabs
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </ScrollReveal>
        </div>

        {/* Stats Row */}
        <ScrollReveal delay={1}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden mb-12">
            {stats.map((stat, i) => (
              <div key={i} className="bg-[var(--jet)] p-8 text-center">
                <p className="font-display font-bold text-white mb-1" style={{ fontSize: "clamp(28px, 4vw, 52px)" }}>
                  {stat.num}
                </p>
                <p className="font-mono text-xs text-white/40 tracking-widest uppercase">{stat.label}</p>
              </div>
            ))}
          </div>
        </ScrollReveal>

        {/* Mock Instagram Feed */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {mockPosts.map((post, i) => (
            <ScrollReveal key={i} delay={i % 2}>
              <div className="group cursor-pointer flex gap-4 p-6 rounded-2xl border border-white/10 bg-white/[0.03] hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300">
                <div className="text-3xl">{post.emoji}</div>
                <div>
                  <span className="font-mono text-xs text-[var(--matcha)] tracking-widest uppercase">{post.tag}</span>
                  <p className="font-heading font-semibold text-white mt-1 text-base group-hover:text-white/90">{post.title}</p>
                </div>
                <div className="ml-auto self-center shrink-0">
                  <ArrowRight className="w-4 h-4 text-white/30 group-hover:text-white group-hover:translate-x-0.5 transition-all" />
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
