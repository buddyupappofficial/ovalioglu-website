"use client";

import { motion, useReducedMotion } from "framer-motion";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

export default function Journey() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <Section glow="warm">
      <div className="mx-auto max-w-2xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-20 sm:mb-28"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.28em] text-muted uppercase">
            Experience
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Yolculuk
          </h2>
        </motion.header>

        <motion.div
          custom={0.1}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={blurReveal}
          className="space-y-10"
        >
          <p className="text-[19px] leading-[1.75] font-light text-body sm:text-xl">
            Yıllar boyunca e-ticaret, marka yönetimi ve dijital operasyonlar
            üzerine çalıştım. Birçok sistem kurdum. Birçok marka büyüttüm.
          </p>

          <p className="font-display text-[clamp(1.5rem,3.5vw,2rem)] leading-[1.45] tracking-[-0.01em] text-body">
            Benim en sevdiğim şey hazır sistemleri yönetmek değil,
            <span className="text-foreground"> yeni şeyler inşa etmekti.</span>
          </p>

          <p className="text-[17px] leading-[1.75] text-muted">
            Bugün Laperissa, BuddyUp ve yapay zekâ ile yeni fikirler üretmeye
            devam ediyorum.
          </p>
        </motion.div>

        <motion.blockquote
          custom={0.3}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={blurReveal}
          className="mt-28 text-center sm:mt-36 lg:mt-44"
        >
          <p className="font-display text-[clamp(1.5rem,4vw,2.5rem)] leading-[1.35] tracking-[-0.02em] text-body">
            &ldquo;En iyi projeler, merak etmeyi bırakmayan insanlar tarafından
            üretilir.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </Section>
  );
}
