"use client";

import { motion, useReducedMotion, type Variants } from "framer-motion";
import AmbientGlow from "@/components/ui/AmbientGlow";
import GrainOverlay from "@/components/ui/GrainOverlay";

const EASE = [0.22, 1, 0.36, 1] as const;

const heroFadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: (delay: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: EASE },
  }),
};

const heroFadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: (delay: number) => ({
    opacity: 1,
    transition: { duration: 1.2, delay, ease: EASE },
  }),
};

const taglines = [
  "Markalar Kuruyor,",
  "Ürünler Geliştiriyor,",
  "Yeni Fikirler Üretiyorum.",
] as const;

function LiveStatusCard() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <motion.aside
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 1, ease: EASE }}
      className={`absolute right-6 bottom-28 z-20 hidden w-52 rounded-2xl border border-white/[0.08] bg-white/[0.03] p-4 backdrop-blur-xl sm:block lg:right-14 lg:bottom-32 lg:w-56 lg:p-5 ${prefersReducedMotion ? "" : "animate-float-slow"}`}
    >
      <p className="mb-3 font-mono text-[10px] tracking-[0.2em] text-zinc-500 uppercase">
        Şu Anda
      </p>

      <div className="space-y-3">
        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.6)]" />
            </span>
            <span className="text-[13px] font-medium text-zinc-200">BuddyUp</span>
          </div>
          <span className="text-[10px] text-zinc-600">Geliştiriliyor</span>
        </div>

        <div className="flex items-center justify-between gap-2">
          <div className="flex items-center gap-2">
            <span className="relative flex h-1.5 w-1.5 shrink-0">
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-sky-400 shadow-[0_0_8px_rgba(56,189,248,0.5)]" />
            </span>
            <span className="text-[13px] font-medium text-zinc-200">Laperissa</span>
          </div>
          <span className="text-[10px] text-zinc-600">Aktif</span>
        </div>
      </div>
    </motion.aside>
  );
}

export default function Hero() {
  const prefersReducedMotion = useReducedMotion();

  const motionProps = (delay: number) =>
    prefersReducedMotion
      ? { initial: false, animate: { opacity: 1, y: 0 } }
      : { initial: "hidden", animate: "visible", custom: delay };

  return (
    <section className="relative flex min-h-dvh flex-col overflow-hidden bg-[#050505] text-white selection:bg-white/10 selection:text-white">
      <AmbientGlow />
      <GrainOverlay />

      <div className="pointer-events-none absolute inset-0 z-0" aria-hidden>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_-20%,rgba(255,255,255,0.06),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_80%_100%,rgba(255,255,255,0.03),transparent)]" />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)
            `,
            backgroundSize: "72px 72px",
            maskImage:
              "radial-gradient(ellipse 70% 60% at 50% 45%, black 20%, transparent 75%)",
          }}
        />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#050505_75%)]" />
      </div>

      <LiveStatusCard />

      <div className="relative z-10 flex flex-1 flex-col items-center justify-center px-6 py-24 sm:px-10 lg:px-14">
        <div className="mx-auto w-full max-w-4xl text-center">
          <motion.h1
            {...motionProps(0.08)}
            variants={heroFadeUp}
            className="font-display text-[clamp(3.25rem,10vw,6.5rem)] leading-[1.02] font-normal tracking-[0.01em] text-white"
          >
            Fırat Ovalıoğlu
          </motion.h1>

          <div className="mt-12 space-y-2 sm:mt-16 sm:space-y-3">
            {taglines.map((line, index) => (
              <motion.p
                key={line}
                {...motionProps(0.22 + index * 0.1)}
                variants={heroFadeUp}
                className="font-sans text-[clamp(1.2rem,2.8vw,1.65rem)] leading-snug font-light tracking-[-0.01em] text-zinc-300"
              >
                {line}
              </motion.p>
            ))}
          </div>

          <motion.div
            {...motionProps(0.55)}
            variants={heroFadeUp}
            className="mx-auto mt-12 max-w-lg space-y-5 sm:mt-16"
          >
            <p className="font-sans text-[15px] leading-[1.8] font-normal tracking-[-0.01em] text-zinc-500 sm:text-base">
              15 yılı aşkın süredir e-ticaret, marka yönetimi ve dijital ürün
              geliştirme alanlarında çalışıyorum.
            </p>
            <p className="font-sans text-[15px] leading-[1.8] font-normal tracking-[-0.01em] text-zinc-500 sm:text-base">
              Bugün ise markalar kuruyor, ürünler geliştiriyor ve yapay zekâ ile
              yeni fikirler üretiyorum.
            </p>
          </motion.div>

          <motion.p
            {...motionProps(0.68)}
            variants={heroFadeUp}
            className="mt-10 font-display text-[17px] leading-relaxed italic tracking-[0.01em] text-zinc-300 sm:mt-12 sm:text-lg"
          >
            &ldquo;Merak etmeyi hiç bırakmadım.&rdquo;
          </motion.p>
        </div>
      </div>

      <footer className="relative z-10 flex justify-center px-6 pb-12 sm:pb-14">
        <motion.div {...motionProps(0.8)} variants={heroFadeUp}>
          <a
            href="#work"
            className="group relative inline-flex items-center gap-3 rounded-full border border-white/[0.08] bg-white/[0.02] px-6 py-3 text-[13px] font-medium tracking-[-0.01em] text-zinc-300 backdrop-blur-sm transition-all duration-500 hover:border-white/[0.16] hover:bg-white/[0.05] hover:text-white"
          >
            <span>Çalışmalarımı Keşfet</span>
            <span className="flex h-5 w-5 items-center justify-center rounded-full border border-white/[0.12] bg-white/[0.04] transition-all duration-500 group-hover:border-white/20 group-hover:bg-white/[0.08]">
              <svg
                width="10"
                height="10"
                viewBox="0 0 10 10"
                fill="none"
                className="translate-y-px transition-transform duration-500 group-hover:translate-y-[3px]"
                aria-hidden
              >
                <path
                  d="M5 1.5V8.5M5 8.5L2.5 6M5 8.5L7.5 6"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </span>
          </a>
        </motion.div>

        <motion.div
          {...(prefersReducedMotion
            ? { initial: false, animate: { opacity: 1 } }
            : { initial: "hidden", animate: "visible", custom: 1.1 })}
          variants={heroFadeIn}
          className="absolute bottom-5 left-1/2 hidden -translate-x-1/2 sm:block"
          aria-hidden
        >
          <div className="h-8 w-px bg-gradient-to-b from-transparent via-zinc-700 to-transparent" />
        </motion.div>
      </footer>
    </section>
  );
}
