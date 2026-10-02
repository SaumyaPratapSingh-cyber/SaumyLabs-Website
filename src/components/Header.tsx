"use client";

import Link from "next/link";
import { motion } from "framer-motion";

export function Header() {
  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 md:px-12 backdrop-blur-md bg-black/50 border-b border-white/5"
    >
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-[var(--color-matcha)]" />
        <span className="font-syne font-bold text-xl tracking-wide">SaumyLabs</span>
      </div>

      <nav className="hidden md:flex items-center gap-8">
        <Link href="#services" className="text-sm text-gray-400 hover:text-white transition-colors">
          Services
        </Link>
        <Link href="#work" className="text-sm text-gray-400 hover:text-white transition-colors">
          The Lab
        </Link>
        <Link href="#community" className="text-sm text-gray-400 hover:text-white transition-colors">
          Community
        </Link>
      </nav>

      <button className="px-5 py-2 rounded-full border border-white/20 text-sm font-medium hover:bg-white hover:text-black transition-colors">
        Let's Talk
      </button>
    </motion.header>
  );
}
