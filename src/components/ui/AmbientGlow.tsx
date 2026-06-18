"use client";

import { motion, useReducedMotion } from "framer-motion";

export default function AmbientGlow() {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) {
    return (
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_40%,rgba(255,255,255,0.05),transparent)]" />
      </div>
    );
  }

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <motion.div
        className="absolute h-[70%] w-[70%] rounded-full bg-[radial-gradient(circle,rgba(255,255,255,0.06)_0%,transparent_70%)] blur-3xl"
        animate={{
          x: ["-10%", "15%", "-5%", "10%", "-10%"],
          y: ["-5%", "10%", "5%", "-8%", "-5%"],
        }}
        transition={{
          duration: 28,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ left: "15%", top: "10%" }}
      />
      <motion.div
        className="absolute h-[50%] w-[50%] rounded-full bg-[radial-gradient(circle,rgba(120,140,255,0.04)_0%,transparent_70%)] blur-3xl"
        animate={{
          x: ["10%", "-12%", "8%", "-6%", "10%"],
          y: ["8%", "-5%", "12%", "3%", "8%"],
        }}
        transition={{
          duration: 32,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{ right: "5%", bottom: "15%" }}
      />
    </div>
  );
}
