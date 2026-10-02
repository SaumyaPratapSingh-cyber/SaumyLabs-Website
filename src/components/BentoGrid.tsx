"use client";

import { motion } from "framer-motion";
import { Code2, PenTool, TrendingUp, Smartphone, ArrowUpRight } from "lucide-react";
import Link from "next/link";

const services = [
  {
    title: "Engineering",
    description: "Next-Gen Web & Mobile Dev. React Native, MERN, and Web3 architecture.",
    icon: <Code2 className="w-8 h-8 text-black" />,
    colSpan: "md:col-span-2",
    delay: 0.1,
    bgColor: "bg-[#F3F4F6]",
    accentColor: "bg-[var(--color-matcha)]",
    link: "#engineering"
  },
  {
    title: "Spatial Design",
    description: "UI/UX Architecture & Brand Identity that converts.",
    icon: <PenTool className="w-8 h-8 text-white" />,
    colSpan: "md:col-span-1",
    delay: 0.2,
    bgColor: "bg-black text-white",
    accentColor: "bg-[var(--color-lavender)]",
    link: "#design"
  },
  {
    title: "Viral Growth",
    description: "SEO, Social Media Management, and Automated Email Funnels.",
    icon: <TrendingUp className="w-8 h-8 text-black" />,
    colSpan: "md:col-span-1",
    delay: 0.3,
    bgColor: "bg-[#F3F4F6]",
    accentColor: "bg-[var(--color-lavender)]",
    link: "#growth"
  },
  {
    title: "App Development",
    description: "Cross-platform mobile applications that feel native and perform flawlessly.",
    icon: <Smartphone className="w-8 h-8 text-black" />,
    colSpan: "md:col-span-2",
    delay: 0.4,
    bgColor: "bg-[#F3F4F6]",
    accentColor: "bg-[var(--color-matcha)]",
    link: "#apps"
  },
];

export function BentoGrid() {
  return (
    <section id="services" className="py-24 px-6 max-w-7xl mx-auto w-full">
      <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-syne font-bold mb-4 text-black">Our Services</h2>
          <p className="text-gray-600 font-inter max-w-2xl text-lg">
            We don't just build websites. We architect digital ecosystems designed for scale, speed, and aesthetic dominance.
          </p>
        </div>
        <Link href="#contact" className="px-6 py-3 rounded-full border border-black/20 text-black font-medium hover:bg-black hover:text-white transition-colors">
          View All Services
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {services.map((service, index) => (
          <Link href={service.link} key={index} className={`block ${service.colSpan}`}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.5, delay: service.delay }}
              whileHover={{ scale: 0.98 }}
              className={`group relative p-8 rounded-[2rem] border border-black/5 overflow-hidden h-full transition-transform cursor-pointer ${service.bgColor}`}
            >
              {/* Hover Accent Reveal */}
              <div className={`absolute top-0 right-0 w-32 h-32 ${service.accentColor} rounded-bl-full translate-x-full -translate-y-full group-hover:translate-x-0 group-hover:translate-y-0 transition-transform duration-500 ease-out opacity-20`} />
              
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[250px]">
                <div className="flex justify-between items-start">
                  <div className={`p-4 rounded-2xl ${service.bgColor === 'bg-black text-white' ? 'bg-white/10' : 'bg-white'} shadow-sm`}>
                    {service.icon}
                  </div>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center ${service.bgColor === 'bg-black text-white' ? 'bg-white/10 text-white' : 'bg-black/5 text-black'} group-hover:rotate-45 transition-transform`}>
                    <ArrowUpRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="mt-8">
                  <h3 className={`text-2xl font-syne font-bold mb-3 ${service.bgColor === 'bg-black text-white' ? 'text-white' : 'text-black'}`}>{service.title}</h3>
                  <p className={`font-inter leading-relaxed ${service.bgColor === 'bg-black text-white' ? 'text-gray-300' : 'text-gray-600'}`}>
                    {service.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </section>
  );
}
