"use client";

import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const projects = [
  {
    num: "01",
    title: "NexaUI Dashboard",
    category: "Web App · UI/UX · Engineering",
    description: "A full-stack SaaS analytics dashboard with real-time charts, user management, and a billing system. Launched in 8 weeks.",
    tags: ["Next.js", "Supabase", "Tailwind"],
    bg: "bg-[var(--jet)]",
    textColor: "text-white",
    accentColor: "#CEFF00",
    // SVG abstract art for this project
  },
  {
    num: "02",
    title: "GreenTrack Mobile",
    category: "Mobile App · React Native",
    description: "Carbon footprint tracker for eco-conscious users. iOS & Android release with 4.8★ App Store rating within 2 months.",
    tags: ["React Native", "Node.js", "MongoDB"],
    bg: "bg-[var(--parchment)]",
    textColor: "text-[var(--ink)]",
    accentColor: "#B693FE",
  },
  {
    num: "03",
    title: "Forma Branding",
    category: "Brand Identity · Visual Design",
    description: "Complete visual identity system: logo, color palette, typography guide, social templates, and pitch deck design.",
    tags: ["Figma", "Illustrator", "Brand Guide"],
    bg: "bg-[var(--parchment)]",
    textColor: "text-[var(--ink)]",
    accentColor: "#CEFF00",
  },
  {
    num: "04",
    title: "DevSphere Platform",
    category: "Web Platform · SEO · Growth",
    description: "Developer community platform with SEO-first blog architecture. Organic traffic grew 340% in 3 months.",
    tags: ["Next.js", "MDX", "SEO", "Analytics"],
    bg: "bg-[var(--jet)]",
    textColor: "text-white",
    accentColor: "#B693FE",
  },
];

export function PortfolioSection() {
  return (
    <section id="work" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Label */}
      <ScrollReveal>
        <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase border border-[var(--stone)] rounded-full px-4 py-1.5">
          03 / Selected Work
        </span>
      </ScrollReveal>

      <div className="mt-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <ScrollReveal delay={1}>
          <h2 className="font-heading font-bold text-[var(--ink)] leading-[1.05]" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
            Work that
            <br />
            <em className="font-display not-italic text-[var(--smoke)]">speaks for itself.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <Link href="#contact" className="group flex items-center gap-2 px-6 py-3 rounded-full border border-[var(--stone)] text-[var(--smoke)] hover:bg-[var(--jet)] hover:text-white hover:border-[var(--jet)] transition-all text-sm font-medium">
            All case studies
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {projects.map((p, i) => (
          <ScrollReveal key={i} delay={i % 2} className="h-full">
            <div className={`group relative rounded-3xl overflow-hidden p-8 md:p-10 border border-[var(--stone)] cursor-pointer transition-all duration-300 hover:-translate-y-1 hover:shadow-xl h-full flex flex-col justify-between min-h-[340px] ${p.bg}`}>

              {/* Abstract SVG art for each card */}
              <div className="absolute top-6 right-6 opacity-20 group-hover:opacity-40 transition-opacity pointer-events-none">
                <svg width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <circle cx="50" cy="50" r="45" stroke={p.accentColor} strokeWidth="1" />
                  <circle cx="50" cy="50" r="25" stroke={p.accentColor} strokeWidth="1" />
                  <line x1="5" y1="50" x2="95" y2="50" stroke={p.accentColor} strokeWidth="0.5" />
                  <line x1="50" y1="5" x2="50" y2="95" stroke={p.accentColor} strokeWidth="0.5" />
                  <circle cx="50" cy="5" r="3" fill={p.accentColor} />
                </svg>
              </div>

              {/* Top */}
              <div className="flex justify-between items-start">
                <span className={`font-mono text-xs tracking-[0.2em] ${p.textColor === 'text-white' ? 'text-white/40' : 'text-[var(--ghost)]'}`}>
                  {p.num}
                </span>
                <div className={`w-9 h-9 rounded-full border flex items-center justify-center group-hover:rotate-45 transition-transform duration-300 ${p.textColor === 'text-white' ? 'border-white/20 text-white' : 'border-[var(--stone)] text-[var(--smoke)]'}`}>
                  <ArrowUpRight className="w-4 h-4" />
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-auto">
                <span className={`font-mono text-[10px] tracking-widest uppercase mb-4 block ${p.textColor === 'text-white' ? 'text-white/40' : 'text-[var(--ghost)]'}`}>
                  {p.category}
                </span>
                <h3 className={`font-heading font-bold text-2xl mb-3 ${p.textColor}`}>{p.title}</h3>
                <p className={`text-sm leading-relaxed mb-6 ${p.textColor === 'text-white' ? 'text-white/60' : 'text-[var(--smoke)]'}`}>
                  {p.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`font-mono text-[10px] tracking-widest uppercase border rounded-full px-3 py-1 ${p.textColor === 'text-white' ? 'border-white/20 text-white/50' : 'border-[var(--stone)] text-[var(--ghost)]'}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
