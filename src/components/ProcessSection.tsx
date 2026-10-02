"use client";

import { ScrollReveal } from "./ScrollReveal";

const steps = [
  {
    num: "01",
    title: "Discovery",
    desc: "We start with a deep-dive into your brand, audience, and goals. No guesswork — just strategy.",
    duration: "Week 1",
  },
  {
    num: "02",
    title: "Blueprint",
    desc: "High-fidelity Figma prototypes covering every screen, interaction, and edge case.",
    duration: "Week 2–3",
  },
  {
    num: "03",
    title: "Build",
    desc: "Engineers take the wheel. We write production-grade code with daily progress updates to you.",
    duration: "Week 3–8",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Deployment, QA, SEO setup, and post-launch monitoring. We don't disappear after going live.",
    duration: "Week 8+",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 md:py-36 bg-[var(--parchment)] border-y border-[var(--stone)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase border border-[var(--stone)] bg-[var(--cream)] rounded-full px-4 py-1.5">
            02 / Process
          </span>
        </ScrollReveal>

        <div className="mt-8 mb-16">
          <ScrollReveal delay={1}>
            <h2 className="font-heading font-bold text-[var(--ink)] leading-[1.05]" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
              How we turn
              <br />
              <em className="font-display not-italic text-[var(--smoke)]">ideas into reality.</em>
            </h2>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 md:gap-6">
          {steps.map((step, i) => (
            <ScrollReveal key={i} delay={i}>
              <div className="group flex flex-col gap-6">
                {/* Number + Line */}
                <div className="flex items-center gap-4">
                  <span className="font-mono text-xs text-[var(--ghost)]">{step.num}</span>
                  <div className="flex-1 h-px bg-[var(--stone)] relative overflow-hidden">
                    <div className="absolute inset-0 bg-[var(--ink)] -translate-x-full group-hover:translate-x-0 transition-transform duration-700 ease-out" />
                  </div>
                </div>

                {/* Duration Tag */}
                <span className="font-mono text-[10px] tracking-[0.2em] text-[var(--ghost)] uppercase border border-[var(--stone)] bg-[var(--cream)] rounded-full px-3 py-1 w-fit">
                  {step.duration}
                </span>

                {/* Title */}
                <h3 className="font-heading font-bold text-xl text-[var(--ink)]">{step.title}</h3>

                {/* Description */}
                <p className="text-sm text-[var(--smoke)] leading-relaxed">{step.desc}</p>
              </div>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
