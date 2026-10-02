"use client";

import { ScrollReveal } from "./ScrollReveal";
import { Star } from "lucide-react";

const testimonials = [
  {
    quote: "SaumyLabs delivered a product that was beyond what we imagined. The attention to detail in the UI and the sheer speed of the site blew our clients away.",
    name: "Aryan Kapoor",
    role: "Founder, NexaUI",
    initials: "AK",
  },
  {
    quote: "From design to deployment in 6 weeks. We went live with a platform that looks like a million-dollar product — because it does a million dollars of work.",
    name: "Priya Mehta",
    role: "CEO, GreenTrack",
    initials: "PM",
  },
  {
    quote: "Our SEO traffic doubled in 3 months. Their growth strategy paired with technical excellence is a rare combination you simply can't find elsewhere.",
    name: "Rohan Verma",
    role: "Marketing Lead, DevSphere",
    initials: "RV",
  },
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-36 px-6 md:px-12 max-w-7xl mx-auto w-full">
      {/* Label */}
      <ScrollReveal>
        <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase border border-[var(--stone)] rounded-full px-4 py-1.5">
          03 / Testimonials
        </span>
      </ScrollReveal>

      <ScrollReveal delay={1}>
        <h2 className="mt-8 mb-16 font-heading font-bold text-[var(--ink)] leading-[1.05]" style={{ fontSize: "clamp(32px,5vw,64px)" }}>
          Clients who
          <br />
          <em className="font-display not-italic text-[var(--smoke)]">trust us.</em>
        </h2>
      </ScrollReveal>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {testimonials.map((t, i) => (
          <ScrollReveal key={i} delay={i}>
            <div className="h-full flex flex-col justify-between p-7 rounded-3xl border border-[var(--stone)] bg-[var(--parchment)] hover:border-[var(--lavender)]/60 transition-colors duration-300">
              {/* Stars */}
              <div className="flex gap-1 mb-6">
                {[...Array(5)].map((_, s) => (
                  <Star key={s} className="w-4 h-4 fill-[var(--matcha)] text-[var(--matcha)]" style={{ filter: "brightness(0.7)" }} />
                ))}
              </div>

              {/* Quote */}
              <p className="text-[var(--ink)] text-base leading-relaxed flex-1 mb-8 font-light">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Person */}
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[var(--jet)] flex items-center justify-center shrink-0">
                  <span className="font-mono text-xs text-white font-medium">{t.initials}</span>
                </div>
                <div>
                  <p className="font-heading font-semibold text-sm text-[var(--ink)]">{t.name}</p>
                  <p className="font-mono text-xs text-[var(--ghost)]">{t.role}</p>
                </div>
              </div>
            </div>
          </ScrollReveal>
        ))}
      </div>
    </section>
  );
}
