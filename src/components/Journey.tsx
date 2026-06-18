"use client";

import { motion, useReducedMotion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";

export default function Journey() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <section className="relative overflow-hidden bg-[#050505] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-52">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden
      >
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_40%,rgba(255,255,255,0.04),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_70%,rgba(255,255,255,0.025),transparent)]" />
      </div>

      <div className="relative mx-auto max-w-6xl">
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-20 sm:mb-28 lg:mb-36"
        >
          <p className="mb-5 font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
            JOURNEY
          </p>
          <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.08] tracking-[-0.02em] text-white">
            Yolculuk
          </h2>
        </motion.header>

        <div className="max-w-2xl">
          <motion.div
            custom={0.1}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="space-y-6"
          >
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              Yıllar boyunca e-ticaret, marka yönetimi ve dijital operasyonlar
              üzerine çalıştım.
            </p>
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              Birçok sistem kurdum.
            </p>
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              Birçok marka büyüttüm.
            </p>
          </motion.div>

          <motion.div
            custom={0.22}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mt-14 space-y-6 sm:mt-20"
          >
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-500 sm:text-lg">
              Ancak zamanla şunu fark ettim:
            </p>
            <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.45] tracking-[-0.01em] text-zinc-300">
              Benim en sevdiğim şey;
            </p>
            <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.45] tracking-[-0.01em] text-zinc-400">
              hazır sistemleri yönetmek değil,
            </p>
            <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.45] tracking-[-0.01em] text-zinc-200">
              yeni şeyler inşa etmekti.
            </p>
          </motion.div>

          <motion.div
            custom={0.35}
            initial="hidden"
            whileInView="visible"
            viewport={viewport}
            variants={fadeUp}
            className="mt-16 space-y-6 sm:mt-24"
          >
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              Bugün;
            </p>
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              bir yandan{" "}
              <span className="text-zinc-200">Laperissa</span>&apos;yı
              geliştiriyor,
            </p>
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              bir yandan{" "}
              <span className="text-zinc-200">BuddyUp</span> üzerinde
              çalışıyor,
            </p>
            <p className="font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              aynı zamanda yapay zekâ ile yeni fikirler üretmeye devam
              ediyorum.
            </p>
            <p className="pt-4 font-sans text-[17px] leading-[1.9] font-light tracking-[-0.01em] text-zinc-500 sm:text-lg">
              Çünkü benim için öğrenmek ve üretmek hiçbir zaman bitmeyen bir
              yolculuk.
            </p>
          </motion.div>
        </div>

        <motion.blockquote
          custom={0.5}
          initial="hidden"
          whileInView="visible"
          viewport={viewport}
          variants={fadeUp}
          className="mx-auto mt-32 max-w-4xl text-center sm:mt-40 lg:mt-52"
        >
          <p className="font-display text-[clamp(1.75rem,4.5vw,3.25rem)] leading-[1.35] tracking-[-0.02em] text-zinc-300">
            &ldquo;En iyi projeler,
            <br className="hidden sm:block" />
            {" "}merak etmeyi bırakmayan insanlar tarafından üretilir.&rdquo;
          </p>
        </motion.blockquote>
      </div>
    </section>
  );
}
