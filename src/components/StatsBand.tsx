"use client";

import { AnimatedCounter } from "./AnimatedCounter";
import { ScrollReveal } from "./ScrollReveal";

const stats = [
  { value: 127, suffix: "+", label: "Projects Delivered" },
  { value: 10000, suffix: "+", label: "Community Members", prefix: "" },
  { value: 99, suffix: "%", label: "Client Satisfaction" },
  { value: 6, suffix: " wks", label: "Avg. Time to Launch" },
];

export function StatsBand() {
  return (
    <section className="border-y border-[var(--stone)] bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-[var(--stone)]">
          {stats.map((stat, i) => (
            <ScrollReveal key={i} delay={i} className="py-12 px-8 flex flex-col items-center text-center group">
              <p className="font-heading font-bold text-[var(--ink)] leading-none mb-2 group-hover:text-[var(--ink)] transition-colors"
                 style={{ fontSize: "clamp(36px,5vw,64px)" }}>
                <AnimatedCounter
                  end={stat.value}
                  suffix={stat.suffix}
                  prefix={stat.prefix ?? ""}
                />
              </p>
              <p className="font-mono text-xs text-[var(--ghost)] tracking-[0.15em] uppercase">{stat.label}</p>
            </ScrollReveal>
          ))}
        </div>
      </div>
    </section>
  );
}
