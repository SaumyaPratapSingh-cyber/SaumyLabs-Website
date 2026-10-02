"use client";

import { useEffect, useRef } from "react";

// Lightweight Scroll Reveal — uses IntersectionObserver + CSS transitions
// ZERO JavaScript running while you scroll (unlike framer-motion whileInView)
export function ScrollReveal({ children, delay = 0, className = "" }: {
  children: React.ReactNode;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("is-visible");
          observer.disconnect(); // Fire once and clean up
        }
      },
      { threshold: 0.1, rootMargin: "0px 0px -60px 0px" }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`reveal delay-${delay} ${className}`}
    >
      {children}
    </div>
  );
}
