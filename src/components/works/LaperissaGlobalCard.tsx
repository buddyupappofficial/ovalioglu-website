"use client";

import { motion } from "framer-motion";
import { fadeUp, viewport } from "@/lib/motion";
import { statusStyles } from "@/config/projects";

function Tag({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center rounded-sm border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-[#d4c4a8]/70 uppercase backdrop-blur-sm transition-colors duration-500 group-hover:border-[#d4c4a8]/25 group-hover:text-[#d4c4a8]/90">
      {label}
    </span>
  );
}

export default function LaperissaGlobalCard() {
  const styles = statusStyles["coming-soon"];

  return (
    <a
      href="https://www.laperissa.com"
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
    >
      <motion.article
        custom={0.3}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 300, damping: 35 },
        }}
        viewport={viewport}
        variants={fadeUp}
        className="group relative"
      >
      <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-sky-500/10 via-[#d4c4a8]/5 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[28px] border border-[#2a2520] bg-[#080807] transition-all duration-700 group-hover:border-[#3d3530]">
        <div className="relative border-b border-[#1f1c18] px-8 py-14 sm:px-12 sm:py-16">
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_80%_at_0%_0%,rgba(56,189,248,0.05),transparent)]" />
          <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_100%_100%,rgba(212,196,168,0.04),transparent)]" />

          <div className="relative flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div>
              <span
                className={`inline-flex items-center gap-2 rounded-sm border px-2.5 py-1 text-[10px] font-medium tracking-[0.2em] uppercase backdrop-blur-sm ${styles.badge}`}
              >
                <span className={`h-1.5 w-1.5 rounded-full ${styles.dot}`} />
                Coming soon
              </span>
              <h3 className="mt-6 font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[0.95] tracking-[-0.02em] text-[#f5f0e8]">
                Laperissa Global
              </h3>
              <p className="mt-3 font-mono text-[11px] tracking-[0.12em] text-[#6b635a] uppercase">
                Brand &amp; Manufacturing Presence.
              </p>
            </div>
            <span className="font-mono text-[11px] tracking-wider text-[#4a443c] uppercase">
              03
            </span>
          </div>

          <div className="relative mt-10 flex items-center gap-4">
            <div className="h-px flex-1 bg-gradient-to-r from-[#d4c4a8]/30 via-[#d4c4a8]/10 to-transparent" />
            <span className="font-mono text-[10px] tracking-wider text-[#4a443c]">
              laperissa.com
            </span>
          </div>
        </div>

        <div className="grid gap-8 p-8 sm:grid-cols-[1fr_auto] sm:items-end sm:p-12">
          <p className="max-w-lg font-sans text-[15px] leading-[1.75] font-light tracking-[-0.01em] text-[#8a8278] sm:text-base">
            Üretim, ihracat ve marka hikayesini anlatan kurumsal platform.
          </p>

          <div className="flex flex-wrap gap-2 sm:max-w-xs sm:justify-end">
            {["Corporate", "Manufacturing", "Export", "Brand Story"].map(
              (tag) => (
                <Tag key={tag} label={tag} />
              ),
            )}
          </div>
        </div>
      </div>
      </motion.article>
    </a>
  );
}
