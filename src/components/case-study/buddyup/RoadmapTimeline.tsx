"use client";

import { Reveal } from "@/components/case-study/CaseStudyUI";

const milestones = [
  { label: "Social Radar", done: true },
  { label: "Daily Intent", done: true },
  { label: "Event System", done: true },
  { label: "Android Release", done: false },
  { label: "iOS Release", done: false },
  { label: "AI Match Suggestions", done: false },
] as const;

export default function RoadmapTimeline() {
  return (
    <div className="mx-auto max-w-xl space-y-0">
      {milestones.map((item, index) => (
        <Reveal key={item.label} delay={index * 0.07}>
          <div className="relative flex items-center gap-5 py-5">
            {index < milestones.length - 1 && (
              <div
                className="absolute left-[11px] top-10 bottom-0 w-px bg-white/[0.06]"
                aria-hidden
              />
            )}

            <span
              className={`relative z-10 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border text-[11px] ${
                item.done
                  ? "border-emerald-500/30 bg-emerald-500/10 text-emerald-400"
                  : "border-zinc-700 bg-zinc-900 text-zinc-600"
              }`}
            >
              {item.done ? "✓" : "○"}
            </span>

            <span
              className={`font-sans text-[16px] tracking-[-0.01em] ${
                item.done ? "text-zinc-300" : "text-zinc-600"
              }`}
            >
              {item.label}
            </span>
          </div>
        </Reveal>
      ))}
    </div>
  );
}
