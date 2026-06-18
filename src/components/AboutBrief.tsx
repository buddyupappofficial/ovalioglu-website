"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function AboutBrief() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <section className="relative bg-[#050505] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-3xl">
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-14 sm:mb-20"
        >
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] leading-[1.1] tracking-[-0.02em] text-white">
            Kısaca Ben
          </h2>
        </motion.header>

        <div className="space-y-10">
          <motion.p
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg sm:leading-[1.85]"
          >
            15 yılı aşkın süredir e-ticaret, marka yönetimi ve dijital ürün
            geliştirme alanlarında çalışıyorum.
          </motion.p>

          <motion.p
            custom={0.2}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg sm:leading-[1.85]"
          >
            Bugün ise markalar kuruyor, dijital ürünler geliştiriyor ve yapay
            zekâ ile yeni fikirler üretiyorum.
          </motion.p>

          <motion.div
            custom={0.35}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="border-l border-white/[0.08] pt-2 pl-6 sm:pl-8"
          >
            <p className="font-display text-[clamp(1.35rem,3vw,1.75rem)] leading-[1.5] tracking-[-0.01em] text-zinc-300">
              Benim için teknoloji bir amaç değil.
            </p>
            <p className="mt-4 font-display text-[clamp(1.35rem,3vw,1.75rem)] leading-[1.5] tracking-[-0.01em] text-zinc-500">
              İnsanlara gerçek değer sunan fikirleri hayata geçirmek için
              kullanılan güçlü bir araç.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
