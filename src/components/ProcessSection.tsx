"use client";

import { motion } from "framer-motion";

const steps = [
  {
    num: "01",
    title: "Discovery & Blueprint",
    desc: "We dive deep into your brand, understanding the core user and mapping out the entire architecture before a single line of code is written.",
  },
  {
    num: "02",
    title: "Spatial Design",
    desc: "Our UI/UX architects craft high-fidelity prototypes in Figma, ensuring every interaction feels premium and every flow converts.",
  },
  {
    num: "03",
    title: "Engineering",
    desc: "We build with Next.js and React Native, prioritizing lightning-fast load times, flawless animations, and scalable backend infrastructure.",
  },
  {
    num: "04",
    title: "Launch & Scale",
    desc: "Deployment on Vercel/AWS, rigorous QA, and setting up the growth engines (SEO & Socials) to dominate your niche.",
  },
];

export function ProcessSection() {
  return (
    <section id="process" className="py-24 px-6 max-w-7xl mx-auto w-full border-t border-black/5 mt-12">
      <div className="mb-16">
        <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4 text-black">How We Do It</h2>
        <p className="text-gray-600 font-inter max-w-2xl text-lg">
          A relentless, streamlined approach from concept to global launch.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.5, delay: index * 0.15 }}
            className="flex flex-col group"
          >
            <div className="text-6xl font-syne font-bold text-black/5 mb-6 group-hover:text-[var(--color-matcha)] transition-colors duration-500">
              {step.num}
            </div>
            <h3 className="text-xl font-syne font-bold text-black mb-3">{step.title}</h3>
            <p className="font-inter text-gray-600 leading-relaxed text-sm">
              {step.desc}
            </p>
            
            {/* Animated progress bar line */}
            <div className="h-[2px] w-full bg-black/5 mt-8 overflow-hidden">
              <motion.div 
                className="h-full bg-black w-0 group-hover:w-full transition-all duration-700 ease-out"
              />
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
