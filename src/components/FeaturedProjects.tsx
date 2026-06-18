"use client";

import { motion, useReducedMotion } from "framer-motion";
import Link from "next/link";
import LaperissaFeaturedCard from "@/components/works/LaperissaFeaturedCard";
import { fadeUp, viewport } from "@/lib/motion";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
      {label}
    </span>
  );
}

const activityBubbles = [
  { emoji: "☕", label: "Kahve", style: { left: "14%", top: "18%" }, delay: "0s" },
  { emoji: "🚶", label: "Yürüyüş", style: { right: "12%", top: "28%" }, delay: "2s" },
  { emoji: "🎬", label: "Sinema", style: { left: "48%", bottom: "22%" }, delay: "4s" },
] as const;

function BuddyUpCard() {
  return (
    <Link href="/works/buddyup" className="block">
    <motion.article
      custom={0.1}
      initial="hidden"
      whileInView="visible"
      whileHover={{
        y: -6,
        transition: { type: "spring", stiffness: 300, damping: 30 },
      }}
      viewport={viewport}
      variants={fadeUp}
      className="group relative"
    >
      <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-sky-500/20 via-violet-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0a0a] transition-colors duration-500 group-hover:border-white/[0.14]">
        <div className="relative h-64 overflow-hidden border-b border-white/[0.06] sm:h-80">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(56,189,248,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(139,92,246,0.1),transparent_50%)]" />

          <div className="absolute inset-0 flex items-center justify-center">
            {[1, 2, 3, 4].map((ring) => (
              <div
                key={ring}
                className="absolute rounded-full border border-sky-400/15 animate-radar-pulse"
                style={{
                  width: `${ring * 22}%`,
                  height: `${ring * 22}%`,
                  animationDelay: `${ring * 0.8}s`,
                }}
              />
            ))}

            <div className="absolute h-3.5 w-3.5 rounded-full bg-sky-400 shadow-[0_0_28px_rgba(56,189,248,0.6)]" />

            <div className="absolute flex h-[46%] w-[46%] items-start justify-center">
              <div className="h-1/2 w-full origin-bottom animate-scan rounded-full bg-gradient-to-t from-sky-400/30 via-sky-400/10 to-transparent" />
            </div>
          </div>

          <div className="absolute top-[32%] left-[24%] h-2.5 w-2.5 rounded-full bg-violet-400/70 shadow-[0_0_14px_rgba(167,139,250,0.5)]" />
          <div className="absolute top-[42%] right-[22%] h-2 w-2 rounded-full bg-sky-300/60 shadow-[0_0_10px_rgba(125,211,252,0.4)]" />
          <div className="absolute bottom-[36%] left-[40%] h-1.5 w-1.5 rounded-full bg-emerald-400/50 shadow-[0_0_8px_rgba(52,211,153,0.4)]" />
          <div className="absolute top-[55%] right-[38%] h-1.5 w-1.5 rounded-full bg-amber-300/40 shadow-[0_0_8px_rgba(252,211,77,0.3)]" />

          {activityBubbles.map((bubble) => (
            <div
              key={bubble.label}
              className="absolute animate-float-bubble"
              style={{ ...bubble.style, animationDelay: bubble.delay }}
            >
              <div className="flex items-center gap-1.5 rounded-full border border-white/[0.1] bg-black/40 px-2.5 py-1 backdrop-blur-md">
                <span className="text-xs">{bubble.emoji}</span>
                <span className="text-[10px] font-medium text-zinc-300">{bubble.label}</span>
              </div>
            </div>
          ))}

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1 text-[11px] font-medium tracking-wide text-emerald-400">
              <span className="relative flex h-1.5 w-1.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
              </span>
              Devam Ediyor
            </span>
            <span className="font-mono text-[11px] tracking-wider text-zinc-600 uppercase">
              01
            </span>
          </div>

          <h3 className="font-sans text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
            BuddyUp
          </h3>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            Aynı ilgi alanlarına sahip insanların gerçek hayatta bir araya
            gelmesini sağlayan sosyal keşif uygulaması.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {[
              "Flutter",
              "Supabase",
              "Social Radar",
              "Event Matching",
              "Daily Intent",
            ].map((tag) => (
              <Tag key={tag} label={tag} />
            ))}
          </div>

          <p className="mt-8 text-[13px] font-medium tracking-[-0.01em] text-zinc-500 transition-colors duration-500 group-hover:text-sky-400/80">
            Case Study →
          </p>
        </div>
      </div>
    </motion.article>
    </Link>
  );
}

export default function FeaturedProjects() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <section
      id="work"
      className="relative bg-[#050505] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.06] to-transparent" />

      <div className="mx-auto max-w-6xl">
        <motion.header
          {...headerMotion}
          variants={fadeUp}
          custom={0}
          className="mb-16 sm:mb-24 lg:mb-28"
        >
          <p className="mb-4 font-mono text-[11px] tracking-[0.2em] text-zinc-600 uppercase">
            Portfolio
          </p>
          <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
            Öne Çıkan Projeler
          </h2>
          <p className="mt-4 max-w-md text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            Üzerinde çalıştığım ve geliştirdiğim projeler.
          </p>
        </motion.header>

        <div className="flex flex-col gap-8 sm:gap-10 lg:gap-12">
          <BuddyUpCard />
          <LaperissaFeaturedCard />
        </div>
      </div>
    </section>
  );
}
