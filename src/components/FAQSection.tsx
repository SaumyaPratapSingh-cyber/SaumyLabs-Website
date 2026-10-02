"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { ScrollReveal } from "./ScrollReveal";

const faqs = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 4–10 weeks depending on scope. A simple website can ship in 3 weeks, while a full-stack product with mobile app takes around 8–12 weeks. We give you a precise timeline after our Discovery call.",
  },
  {
    q: "What does your pricing look like?",
    a: "We work with a project-based model. Typical engagement ranges: UI/UX Design from ₹30k–₹80k, Web Development from ₹60k–₹2.5L, Full Product Build from ₹1.5L–₹6L. We'll send a custom quote after understanding your project.",
  },
  {
    q: "Do you work with international clients?",
    a: "Absolutely. Most of our clients are from India, the USA, UK, and UAE. We operate fully remote and are comfortable with async communication across time zones.",
  },
  {
    q: "What tech stack do you use?",
    a: "We primarily build with Next.js, React, Node.js, MongoDB, PostgreSQL, and React Native. For design we use Figma. We're stack-agnostic and can adapt to your existing infrastructure.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes — every project comes with a 30-day post-launch support window at no extra cost. For ongoing maintenance, we offer retainer packages starting at ₹15k/month.",
  },
  {
    q: "Can I see more portfolio examples?",
    a: "We'd love to share more work in a one-on-one call where we can also answer your questions live. Book a free 20-minute call and we'll share our full portfolio deck.",
  },
];

export function FAQSection() {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24 md:py-36 border-y border-[var(--stone)] bg-[var(--cream)]">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        {/* Label */}
        <ScrollReveal>
          <span className="font-mono text-xs text-[var(--smoke)] tracking-[0.2em] uppercase border border-[var(--stone)] rounded-full px-4 py-1.5">
            05 / FAQ
          </span>
        </ScrollReveal>

        <div className="mt-8 mb-16 flex flex-col md:flex-row gap-16">
          {/* Left: heading */}
          <ScrollReveal delay={1} className="md:w-1/3 shrink-0">
            <h2 className="font-heading font-bold text-[var(--ink)] leading-[1.05] sticky top-28" style={{ fontSize: "clamp(28px,4vw,52px)" }}>
              Questions
              <br />
              <em className="font-display not-italic text-[var(--smoke)]">answered.</em>
            </h2>
          </ScrollReveal>

          {/* Right: accordion */}
          <div className="flex-1 flex flex-col divide-y divide-[var(--stone)]">
            {faqs.map((faq, i) => (
              <ScrollReveal key={i} delay={i % 3}>
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-start justify-between gap-4 py-6 text-left group"
                >
                  <span className={`font-heading font-semibold text-base md:text-lg transition-colors ${open === i ? "text-[var(--ink)]" : "text-[var(--smoke)] group-hover:text-[var(--ink)]"}`}>
                    {faq.q}
                  </span>
                  <div className={`shrink-0 w-7 h-7 rounded-full border flex items-center justify-center transition-all duration-300 ${open === i ? "bg-[var(--jet)] border-[var(--jet)] text-white rotate-45" : "border-[var(--stone)] text-[var(--smoke)] group-hover:border-[var(--ink)]"}`}>
                    <Plus className="w-3.5 h-3.5" />
                  </div>
                </button>
                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-[var(--smoke)] leading-relaxed text-base font-light">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </ScrollReveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
