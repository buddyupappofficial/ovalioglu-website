"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { statusStyles } from "@/config/projects";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1 text-[11px] font-medium tracking-wide text-zinc-400">
      {label}
    </span>
  );
}

export default function PatternOSCard() {
  const styles = statusStyles.rnd;

  return (
    <motion.article
      custom={0.4}
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
      <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-violet-500/20 via-fuchsia-500/10 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[28px] border border-white/[0.08] bg-[#0a0a0a] transition-colors duration-500 group-hover:border-white/[0.14]">
        <div className="relative h-64 overflow-hidden border-b border-white/[0.06] sm:h-72">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_120%,rgba(139,92,246,0.14),transparent)]" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_30%,rgba(217,70,239,0.08),transparent_50%)]" />

          <div
            className="absolute inset-0 opacity-[0.35]"
            style={{
              backgroundImage: `
                linear-gradient(rgba(167,139,250,0.12) 1px, transparent 1px),
                linear-gradient(90deg, rgba(167,139,250,0.12) 1px, transparent 1px)
              `,
              backgroundSize: "32px 32px",
            }}
          />

          <div className="absolute inset-0 flex items-center justify-center">
            <svg
              viewBox="0 0 200 200"
              className="h-[55%] w-[55%] text-violet-400/30 transition-transform duration-700 group-hover:scale-105"
              fill="none"
              aria-hidden
            >
              <path
                d="M20 100 L100 20 L180 100 L100 180 Z"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <path
                d="M50 100 L100 50 L150 100 L100 150 Z"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <path
                d="M80 100 L100 80 L120 100 L100 120 Z"
                stroke="currentColor"
                strokeWidth="0.75"
              />
              <circle cx="100" cy="100" r="3" fill="rgba(167,139,250,0.6)" />
            </svg>
          </div>

          <div className="absolute top-[22%] left-[18%] h-2 w-2 rounded-full bg-fuchsia-400/50 shadow-[0_0_10px_rgba(232,121,249,0.4)]" />
          <div className="absolute top-[35%] right-[20%] h-1.5 w-1.5 rounded-full bg-violet-300/50" />
          <div className="absolute bottom-[30%] left-[42%] h-1.5 w-1.5 rounded-full bg-violet-400/40" />

          <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-[#0a0a0a] to-transparent" />
        </div>

        <div className="p-8 sm:p-10">
          <div className="mb-6 flex items-center justify-between gap-4">
            <span
              className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-[11px] font-medium tracking-wide ${styles.badge}`}
            >
              {styles.ping && (
                <span className="relative flex h-1.5 w-1.5">
                  <span
                    className={`absolute inline-flex h-full w-full animate-ping rounded-full ${styles.dot} opacity-60`}
                  />
                  <span
                    className={`relative inline-flex h-1.5 w-1.5 rounded-full ${styles.dot}`}
                  />
                </span>
              )}
              R&amp;D
            </span>
            <span className="font-mono text-[11px] tracking-wider text-zinc-600 uppercase">
              04
            </span>
          </div>

          <h3 className="font-sans text-3xl font-medium tracking-[-0.03em] text-white sm:text-4xl">
            PatternOS
          </h3>

          <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-zinc-600 uppercase">
            AI Powered Pattern Intelligence.
          </p>

          <p className="mt-4 max-w-xl text-[15px] leading-relaxed text-zinc-500 sm:text-base">
            Tekstil kalıp geliştirme süreçlerini dijitalleştiren üretim sistemi.
          </p>

          <div className="mt-8 flex flex-wrap gap-2">
            {["AI", "Pattern Making", "Textile", "Production Systems"].map(
              (tag) => (
                <Tag key={tag} label={tag} />
              ),
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
}
