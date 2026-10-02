"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, TrendingUp, Smartphone } from "lucide-react";

const services = [
  {
    title: "Engineering",
    description: "Next-Gen Web & Mobile Dev. Next.js, React Native, MERN, and Web3 architecture.",
    icon: <Code2 className="w-8 h-8 text-[var(--color-matcha)]" />,
    colSpan: "md:col-span-2",
    delay: 0.1,
  },
  {
    title: "Spatial Design",
    description: "UI/UX Architecture & Brand Identity that converts.",
    icon: <PenTool className="w-8 h-8 text-[var(--color-lavender)]" />,
    colSpan: "md:col-span-1",
    delay: 0.2,
  },
  {
    title: "Viral Growth",
    description: "SEO, Social Media Management, and Automated Email Funnels.",
    icon: <TrendingUp className="w-8 h-8 text-[var(--color-matcha)]" />,
    colSpan: "md:col-span-1",
    delay: 0.3,
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications that feel native and perform flawlessly.",
    icon: <Smartphone className="w-8 h-8 text-[var(--color-lavender)]" />,
    colSpan: "md:col-span-2",
    delay: 0.4,
  },
];

export function BentoGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4">Our Services</h2>
        <p className="text-gray-400 font-inter max-w-2xl text-lg">
          We don't just build websites. We architect digital ecosystems designed for scale, speed, and aesthetic dominance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {services.map((service, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: service.delay }}
            whileHover={{ scale: 1.02 }}
            className={`group relative p-8 rounded-3xl border border-white/10 bg-white/[0.02] overflow-hidden ${service.colSpan} hover:border-white/20 transition-colors cursor-pointer`}
          >
            {/* Hover Gradient Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-white/[0.05] to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative z-10 flex flex-col h-full justify-between">
              <div className="mb-8 p-4 bg-white/5 w-fit rounded-2xl border border-white/10 group-hover:border-[var(--color-matcha)] transition-colors">
                {service.icon}
              </div>
              <div>
                <h3 className="text-2xl font-syne font-bold mb-3">{service.title}</h3>
                <p className="text-gray-400 font-inter leading-relaxed">
                  {service.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
