"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Work", href: "#work" },
  { label: "Community", href: "#community" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "py-3 bg-[var(--cream)]/90 backdrop-blur-xl border-b border-[var(--stone)]"
          : "py-5 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="relative w-8 h-8">
            <div className="absolute inset-0 bg-[var(--jet)] rounded-sm rotate-45 group-hover:rotate-[60deg] transition-transform duration-500" />
            <div className="absolute inset-[5px] bg-[var(--matcha)] rounded-sm group-hover:scale-90 transition-transform duration-500" />
          </div>
          <span
            className="font-heading font-bold text-lg tracking-tight text-[var(--ink)]"
          >
            SaumyLabs
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-1 bg-[var(--parchment)] border border-[var(--stone)] rounded-full px-2 py-1.5">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="px-4 py-1.5 text-sm font-medium text-[var(--smoke)] hover:text-[var(--ink)] hover:bg-white rounded-full transition-all duration-200"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA Button */}
        <div className="hidden md:flex items-center gap-3">
          <Link
            href="#contact"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full bg-[var(--jet)] text-white text-sm font-medium hover:bg-[var(--ink)] transition-colors"
          >
            Let&apos;s Talk
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden p-2 rounded-lg border border-[var(--stone)] bg-[var(--parchment)]"
        >
          {menuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-[var(--cream)]/95 backdrop-blur-xl border-b border-[var(--stone)] px-6 py-4 flex flex-col gap-2">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className="text-[var(--ink)] font-medium py-3 border-b border-[var(--stone)] last:border-0"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="#contact"
            onClick={() => setMenuOpen(false)}
            className="mt-2 w-full text-center py-3 rounded-full bg-[var(--jet)] text-white font-medium"
          >
            Let&apos;s Talk
          </Link>
        </div>
      )}
    </header>
  );
}
