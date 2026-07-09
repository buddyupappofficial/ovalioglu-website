"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { laperissaBrand } from "@/config/laperissa";
import { fadeUp, viewport } from "@/lib/motion";

export default function LaperissaFeaturedCard() {
  const { websiteUrl, homepagePreviewSrc, homepagePreviewAlt, tags } =
    laperissaBrand;

  return (
    <a
      href={websiteUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="group block cursor-pointer"
    >
      <motion.article
        custom={0.2}
        initial="hidden"
        whileInView="visible"
        whileHover={{
          y: -4,
          transition: { type: "spring", stiffness: 300, damping: 35 },
        }}
        viewport={viewport}
        variants={fadeUp}
        className="relative"
      >
        <div className="pointer-events-none absolute -inset-px rounded-[28px] bg-gradient-to-b from-[#d4c4a8]/10 to-transparent opacity-0 blur-xl transition-opacity duration-700 group-hover:opacity-100" />

        <div className="relative overflow-hidden rounded-[28px] border border-[#2a2520] transition-all duration-700 group-hover:border-[#3d3530]">
          <div className="relative h-[420px] overflow-hidden sm:h-[480px] lg:h-[520px]">
            <Image
              src={homepagePreviewSrc}
              alt={homepagePreviewAlt}
              fill
              priority={false}
              sizes="(max-width: 768px) 100vw, 1152px"
              className="object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-[#050505]/95 via-[#050505]/40 to-[#050505]/20" />
            <div className="absolute inset-0 bg-gradient-to-r from-[#050505]/30 via-transparent to-[#050505]/20" />

            <div className="absolute inset-0 flex flex-col justify-between p-8 sm:p-10 lg:p-12">
              <div className="flex items-start justify-between gap-4">
                <span className="inline-flex items-center gap-2 rounded-sm border border-emerald-500/20 bg-emerald-500/[0.08] px-2.5 py-1 text-[10px] font-medium tracking-[0.25em] text-emerald-400 uppercase backdrop-blur-sm">
                  <span className="relative flex h-1.5 w-1.5">
                    <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-60" />
                    <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                  </span>
                  Live
                </span>
                <span className="font-mono text-[11px] tracking-wider text-white/40 uppercase">
                  02
                </span>
              </div>

              <div className="flex flex-col gap-8 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-[clamp(2.5rem,6vw,4rem)] leading-[0.95] tracking-[-0.03em] text-[#f5f0e8]">
                    Laperissa
                  </h3>
                  <p className="mt-2 font-mono text-[11px] tracking-[0.12em] text-[#6b635a] uppercase">
                    Digital Commerce Platform.
                  </p>
                  <p className="mt-3 max-w-sm text-[15px] leading-relaxed font-light text-[#d4c4a8]/80">
                    Kadın giyim markası için modern D2C e-ticaret deneyimi.
                  </p>
                  <p className="mt-3 font-mono text-[10px] tracking-wider text-[#4a443c]">
                    laperissa.com.tr
                  </p>
                </div>

                <div className="flex flex-wrap justify-start gap-2 sm:max-w-xs sm:justify-end">
                  {tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-sm border border-white/10 bg-black/30 px-3 py-1 text-[10px] font-medium tracking-[0.08em] text-[#d4c4a8]/70 uppercase backdrop-blur-sm transition-colors duration-500 group-hover:border-[#d4c4a8]/25 group-hover:text-[#d4c4a8]/90"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.article>
    </a>
  );
}
