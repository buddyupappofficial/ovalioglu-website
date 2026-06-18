"use client";

import { motion, useReducedMotion } from "framer-motion";

const blips = [
  { label: "Kahve", angle: 42, distance: 55, color: "bg-amber-400", delay: 0 },
  { label: "Yürüyüş", angle: 128, distance: 48, color: "bg-emerald-400", delay: 1.2 },
  { label: "Sinema", angle: 215, distance: 58, color: "bg-violet-400", delay: 2.4 },
  { label: "Spor", angle: 310, distance: 42, color: "bg-sky-400", delay: 3.6 },
] as const;

function polarToPercent(angle: number, distance: number) {
  const rad = (angle * Math.PI) / 180;
  return {
    left: `${50 + Math.cos(rad) * (distance / 2)}%`,
    top: `${50 + Math.sin(rad) * (distance / 2)}%`,
  };
}

export default function SocialRadarVisualization() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <div
      className="relative mx-auto aspect-square w-full max-w-[700px] overflow-hidden"
      style={{ contain: "layout paint" }}
    >
      <div className="absolute inset-0 rounded-full border border-white/[0.06] bg-white/[0.01]" />

      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-1/2 h-px w-full -translate-x-1/2 -translate-y-1/2 bg-white/[0.04]" />
        <div className="absolute left-1/2 top-1/2 h-full w-px -translate-x-1/2 -translate-y-1/2 bg-white/[0.04]" />
      </div>

      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        {[1, 2, 3, 4, 5].map((ring) => {
          const size = `${ring * 18}%`;
          return (
            <div
              key={ring}
              className={`absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/10 ${prefersReducedMotion ? "" : "animate-radar-pulse"}`}
              style={{
                width: size,
                height: size,
                animationDelay: `${ring * 0.7}s`,
              }}
            />
          );
        })}
      </div>

      {!prefersReducedMotion && (
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <div className="absolute left-1/2 top-1/2 h-[46%] w-[46%] -translate-x-1/2 -translate-y-1/2 origin-center animate-scan">
            <div className="absolute left-0 top-0 h-1/2 w-full origin-bottom rounded-full bg-gradient-to-t from-sky-400/25 via-sky-400/8 to-transparent" />
          </div>
        </div>
      )}

      <div className="absolute inset-0 overflow-hidden" aria-hidden>
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
          <span className="relative flex h-4 w-4">
            {!prefersReducedMotion && (
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-30" />
            )}
            <span className="relative inline-flex h-4 w-4 rounded-full bg-sky-400 shadow-[0_0_32px_rgba(56,189,248,0.7)]" />
          </span>
        </div>
      </div>

      <div className="absolute inset-0 overflow-hidden">
        {blips.map((blip) => {
          const pos = polarToPercent(blip.angle, blip.distance);
          return (
            <motion.div
              key={blip.label}
              className="absolute"
              style={{
                left: pos.left,
                top: pos.top,
                transform: "translate(-50%, -50%)",
              }}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: blip.delay * 0.3, duration: 0.6 }}
            >
              <div className="flex items-center gap-2">
                <span
                  className={`relative flex h-2.5 w-2.5 shrink-0 rounded-full ${blip.color} opacity-80 ${prefersReducedMotion ? "" : "animate-float-bubble"}`}
                  style={{ animationDelay: `${blip.delay}s` }}
                />
                <span className="whitespace-nowrap rounded-full border border-white/10 bg-black/50 px-2.5 py-1 text-[10px] font-medium tracking-wide text-zinc-300 backdrop-blur-md">
                  {blip.label}
                </span>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div
        className="pointer-events-none absolute inset-0 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(56,189,248,0.06) 0%, transparent 65%)",
        }}
        aria-hidden
      />
    </div>
  );
}
