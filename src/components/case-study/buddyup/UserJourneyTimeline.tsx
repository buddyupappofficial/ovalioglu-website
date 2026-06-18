"use client";

import { Reveal } from "@/components/case-study/CaseStudyUI";

const steps = [
  {
    num: "1",
    title: "Bugün ne yapmak istiyorsun?",
    activities: ["☕ Kahve", "🚶 Yürüyüş", "🎬 Sinema"],
  },
  {
    num: "2",
    title: "Yakındaki insanları keşfet",
  },
  {
    num: "3",
    title: "Etkinlik oluştur",
  },
  {
    num: "4",
    title: "Gerçek hayatta buluş",
  },
] as const;

export default function UserJourneyTimeline() {
  return (
    <div className="relative mx-auto max-w-lg">
      {steps.map((step, index) => (
        <Reveal key={step.num} delay={index * 0.1}>
          <div className="relative flex gap-6 pb-12 last:pb-0 sm:gap-8">
            {index < steps.length - 1 && (
              <div
                className="absolute left-[15px] top-10 bottom-0 w-px bg-gradient-to-b from-sky-400/30 via-sky-400/10 to-transparent sm:left-[17px]"
                aria-hidden
              />
            )}

            <div className="relative z-10 flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-sky-400/30 bg-sky-400/10 sm:h-9 sm:w-9">
              <span className="font-mono text-[12px] text-sky-400">{step.num}</span>
            </div>

            <div className="min-w-0 flex-1 pt-0.5">
              <h3 className="font-sans text-lg font-medium tracking-[-0.02em] text-zinc-200 sm:text-xl">
                {step.title}
              </h3>

              {"activities" in step && step.activities && (
                <div className="mt-4 flex flex-wrap gap-2">
                  {step.activities.map((activity) => (
                    <span
                      key={activity}
                      className="rounded-full border border-white/[0.08] bg-white/[0.03] px-3 py-1.5 text-[12px] text-zinc-400"
                    >
                      {activity}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>

          {index < steps.length - 1 && (
            <div className="flex justify-center py-2 sm:pl-[17px] sm:justify-start">
              <span className="font-mono text-sm text-zinc-700" aria-hidden>
                ↓
              </span>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
