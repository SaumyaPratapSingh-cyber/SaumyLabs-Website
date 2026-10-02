"use client";

import { useEffect, useRef } from "react";

export function CustomCursor() {
  const dotRef = useRef<HTMLDivElement>(null);
  const ringRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let mouseX = 0, mouseY = 0;
    let ringX = 0, ringY = 0;
    let raf: number;

    const onMove = (e: MouseEvent) => {
      mouseX = e.clientX;
      mouseY = e.clientY;
      if (dotRef.current) {
        dotRef.current.style.transform = `translate(${mouseX}px, ${mouseY}px)`;
      }
    };

    const animate = () => {
      // Ring lerps toward cursor with lag for that silky feel
      ringX += (mouseX - ringX) * 0.12;
      ringY += (mouseY - ringY) * 0.12;
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ringX}px, ${ringY}px)`;
      }
      raf = requestAnimationFrame(animate);
    };

    const onEnterLink = () => {
      ringRef.current?.classList.add("expanded");
    };
    const onLeaveLink = () => {
      ringRef.current?.classList.remove("expanded");
    };

    const addLinkListeners = () => {
      document.querySelectorAll("a, button, [data-cursor]").forEach((el) => {
        el.addEventListener("mouseenter", onEnterLink);
        el.addEventListener("mouseleave", onLeaveLink);
      });
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    raf = requestAnimationFrame(animate);
    addLinkListeners();

    // Re-attach when DOM changes (for dynamic links)
    const observer = new MutationObserver(addLinkListeners);
    observer.observe(document.body, { childList: true, subtree: true });

    return () => {
      window.removeEventListener("mousemove", onMove);
      cancelAnimationFrame(raf);
      observer.disconnect();
    };
  }, []);

  return (
    <>
      {/* Dot — instant follow */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[99999] pointer-events-none -translate-x-1/2 -translate-y-1/2"
        style={{ willChange: "transform" }}
      >
        <div className="w-1.5 h-1.5 rounded-full bg-[var(--ink)]" />
      </div>
      {/* Ring — lagged follow */}
      <div
        ref={ringRef}
        className="cursor-ring fixed top-0 left-0 z-[99998] pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-[width,height,border-color] duration-200"
        style={{ willChange: "transform" }}
      />
      <style>{`
        .cursor-ring {
          width: 32px;
          height: 32px;
          border-radius: 50%;
          border: 1.5px solid rgba(26,24,20,0.3);
        }
        .cursor-ring.expanded {
          width: 56px;
          height: 56px;
          border-color: rgba(26,24,20,0.15);
          background: rgba(206,255,0,0.08);
        }
        @media (pointer: coarse) {
          .cursor-ring, .cursor-ring + * { display: none; }
        }
      `}</style>
    </>
  );
}
