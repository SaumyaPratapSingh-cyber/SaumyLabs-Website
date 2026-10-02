"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-xl bg-white/70 border-b border-black/5"
    >
      <Link href="/" className="flex items-center gap-2 group">
        <div className="w-8 h-8 rounded-full bg-[var(--color-matcha)] group-hover:scale-110 transition-transform" />
        <span className="font-syne font-bold text-xl tracking-wide text-black">SaumyLabs</span>
      </Link>

      <nav className="hidden md:flex items-center gap-8 bg-black/5 px-6 py-2 rounded-full border border-black/5">
        <Link href="#services" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Services
        </Link>
        <Link href="#process" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Process
        </Link>
        <Link href="#community" className="text-sm font-medium text-gray-600 hover:text-black transition-colors">
          Community
        </Link>
      </nav>

      <Link href="#contact" className="group px-5 py-2 rounded-full bg-black text-white text-sm font-medium hover:bg-[var(--color-matcha)] hover:text-black transition-colors flex items-center gap-2">
        Let's Talk
        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
      </Link>
    </motion.header>
  );
}
