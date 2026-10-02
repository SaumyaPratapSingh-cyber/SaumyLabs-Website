"use client";

import { ArrowRight, Layers, Pen, TrendingUp, Smartphone, Code, Globe } from "lucide-react";
import Link from "next/link";
import { ScrollReveal } from "./ScrollReveal";

const services = [
  {
    num: "01",
    title: "Web Engineering",
    description: "Blazing-fast Next.js websites and full-stack applications built for scale, SEO, and conversion.",
    tags: ["Next.js", "React", "MERN", "Node.js"],
    icon: Code,
    span: "md:col-span-2",
    dark: true,
  },
  {
    num: "02",
    title: "UI/UX Design",
    description: "Pixel-perfect interfaces designed in Figma that turn visitors into paying customers.",
    tags: ["Figma", "Prototyping", "Design Systems"],
    icon: Pen,
    span: "md:col-span-1",
    dark: false,
  },
  {
    num: "03",
    title: "App Development",
    description: "Cross-platform mobile apps with React Native that feel native and perform flawlessly.",
    tags: ["React Native", "iOS", "Android"],
    icon: Smartphone,
    span: "md:col-span-1",
    dark: false,
  },
  {
    num: "04",
    title: "Growth & SEO",
    description: "Full-funnel growth strategies including technical SEO, email automation, and social media.",
    tags: ["SEO", "Email Funnels", "Analytics"],
    icon: TrendingUp,
    span: "md:col-span-1",
    dark: false,
  },
  {
    num: "05",
    title: "Brand Identity",
    description: "Logos, visual systems, and brand guidelines that position you as the premium choice.",
    tags: ["Logo Design", "Brand Guide", "Identity"],
    icon: Layers,
    span: "md:col-span-1",
    dark: false,
  },
  {
    num: "06",
    title: "Web3 & Integrations",
    description: "Smart contracts, blockchain integrations, and API connections that future-proof your product.",
    tags: ["Web3", "APIs", "Smart Contracts"],
    icon: Globe,
    span: "md:col-span-2",
    dark: false,
  },
];

export function ServicesGrid() {
  return (
    <section id="services" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Section Label */}
      <ScrollReveal>
        <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase border border-[var(--stone)] rounded-full px-4 py-1.5">
          01 / Services
        </span>
      </ScrollReveal>

      <div className="mt-8 mb-16 flex flex-col md:flex-row justify-between items-start md:items-end gap-6">
        <ScrollReveal delay={1}>
          <h2 className="font-heading text-[var(--text-h2)] font-bold leading-[1.05] text-[var(--ink)] max-w-lg" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
            Everything your
            <br />
            <em className="font-display not-italic text-[var(--smoke)]">brand needs.</em>
          </h2>
        </ScrollReveal>
        <ScrollReveal delay={2}>
          <p className="text-[var(--smoke)] max-w-xs text-base leading-relaxed">
            Full-service digital agency. From zero to launch and beyond — we cover every touchpoint.
          </p>
        </ScrollReveal>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {services.map((service, i) => {
          const Icon = service.icon;
          return (
            <ScrollReveal key={i} delay={i % 3} className={service.span}>
              <div
                className={`group relative p-8 rounded-3xl border transition-all duration-300 cursor-pointer h-full flex flex-col justify-between min-h-[240px] hover:-translate-y-1 ${
                  service.dark
                    ? "bg-[var(--jet)] border-transparent text-white"
                    : "bg-[var(--parchment)] border-[var(--stone)] hover:border-[var(--lavender)]/60 text-[var(--ink)]"
                }`}
              >
                {/* Ghost Number */}
                <span
                  className={`absolute top-4 right-6 font-display font-bold text-8xl leading-none select-none pointer-events-none transition-opacity ${
                    service.dark ? "text-white/5" : "text-[var(--ink)]/5"
                  } group-hover:opacity-100 opacity-70`}
                >
                  {service.num}
                </span>

                {/* Top: Icon + Arrow */}
                <div className="flex justify-between items-start">
                  <div className={`p-3 rounded-2xl ${service.dark ? "bg-white/10" : "bg-white border border-[var(--stone)]"}`}>
                    <Icon className={`w-5 h-5 ${service.dark ? "text-[var(--matcha)]" : "text-[var(--ink)]"}`} />
                  </div>
                  <div className={`w-9 h-9 rounded-full flex items-center justify-center border transition-all duration-300 group-hover:rotate-45 ${service.dark ? "border-white/20 text-white" : "border-[var(--stone)] text-[var(--smoke)]"}`}>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>

                {/* Bottom: Title + Desc + Tags */}
                <div className="mt-8">
                  <h3 className={`font-heading font-bold text-xl mb-2 ${service.dark ? "text-white" : "text-[var(--ink)]"}`}>
                    {service.title}
                  </h3>
                  <p className={`text-sm leading-relaxed mb-4 ${service.dark ? "text-white/60" : "text-[var(--smoke)]"}`}>
                    {service.description}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`font-mono text-xs px-3 py-1 rounded-full border ${
                          service.dark
                            ? "border-white/20 text-white/60"
                            : "border-[var(--stone)] text-[var(--smoke)] bg-white/50"
                        }`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </ScrollReveal>
          );
        })}
      </div>

      <ScrollReveal delay={2} className="mt-8 flex justify-center">
        <Link
          href="#contact"
          className="group flex items-center gap-2 px-7 py-3.5 rounded-full border border-[var(--stone)] text-[var(--smoke)] hover:bg-[var(--jet)] hover:text-white hover:border-[var(--jet)] transition-all duration-300 text-sm font-medium"
        >
          Start a project
          <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </Link>
      </ScrollReveal>
    </section>
  );
}
