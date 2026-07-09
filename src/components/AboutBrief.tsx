"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

export default function AboutBrief() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <Section glow="neutral">
      <div className="mx-auto max-w-2xl text-center">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-16 sm:mb-20"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            About
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-foreground">
            Kısaca Ben
          </h2>
        </motion.header>

        <div className="space-y-12">
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={blurReveal}
            className="text-[19px] leading-[1.75] font-light tracking-[-0.01em] text-body sm:text-xl"
          >
            20 yılı aşkın üretim ve operasyon deneyimini modern yazılım
            ürünlerine dönüştürüyorum.
          </motion.p>

          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={blurReveal}
            className="font-display text-[clamp(1.35rem,3vw,1.75rem)] leading-[1.5] tracking-[-0.01em] text-body"
          >
            Tekstil üretiminden e-ticaret altyapılarına, ürün geliştirmeden
            otomasyona ve yapay zeka destekli iş akışlarına kadar — sahadaki
            bilgiyi teknolojiyle birleştiriyorum.
          </motion.p>

          <motion.p
            custom={0.3}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={blurReveal}
            className="text-[17px] leading-[1.75] text-muted"
          >
            Amacım sistemleri yönetmek değil; gerçek problemleri çözen,
            ölçeklenebilir dijital ürünler inşa etmek.
          </motion.p>
        </div>
      </div>
    </Section>
  );
}
