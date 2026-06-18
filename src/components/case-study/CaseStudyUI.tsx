"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import type { ReactNode } from "react";

export function Reveal({
  children,
  delay = 0,
  className = "",
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div
      custom={delay}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={fadeUp}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export function SectionLabel({ children }: { children: ReactNode }) {
  return (
    <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
      {children}
    </p>
  );
}

export function CaseStudyBack({ accent = "zinc" }: { accent?: "zinc" | "warm" }) {
  const hover =
    accent === "warm"
      ? "hover:border-[#d4c4a8]/30 hover:text-[#d4c4a8]"
      : "hover:border-white/20 hover:text-white";

  return (
    <a
      href="/#work"
      className={`inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 text-[12px] font-medium tracking-[-0.01em] text-zinc-400 backdrop-blur-sm transition-all duration-500 ${hover}`}
    >
      <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
        <path
          d="M7.5 2.5L3.5 6L7.5 9.5"
          stroke="currentColor"
          strokeWidth="1.25"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      Projeler
    </a>
  );
}
