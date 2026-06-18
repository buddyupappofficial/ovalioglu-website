"use client";

import { Reveal } from "@/components/case-study/CaseStudyUI";

const layers = [
  {
    name: "Flutter",
    description: "Cross-platform mobil deneyim. Tek kod tabanı, iOS ve Android.",
  },
  {
    name: "Supabase",
    description: "Auth, realtime ve API katmanı. Hızlı ve ölçeklenebilir backend.",
  },
  {
    name: "PostgreSQL",
    description: "İlişkisel veri modeli. Kullanıcılar, etkinlikler ve eşleşmeler.",
  },
  {
    name: "RLS Policies",
    description: "Satır düzeyinde güvenlik. Her kullanıcı yalnızca kendi verisine erişir.",
  },
  {
    name: "Realtime Events",
    description: "Anlık güncellemeler. Yakındaki aktiviteler canlı olarak yansır.",
  },
] as const;

export default function ArchitectureFlow() {
  return (
    <div className="mx-auto max-w-md">
      {layers.map((layer, index) => (
        <Reveal key={layer.name} delay={index * 0.08}>
          <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 backdrop-blur-sm transition-all duration-500 hover:border-sky-400/20 hover:bg-white/[0.04]">
            <p className="font-mono text-[15px] font-medium tracking-wide text-zinc-200">
              {layer.name}
            </p>
            <p className="mt-2 text-[13px] leading-relaxed text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
              {layer.description}
            </p>
          </div>

          {index < layers.length - 1 && (
            <div className="flex justify-center py-3" aria-hidden>
              <span className="font-mono text-sm text-sky-400/40">↓</span>
            </div>
          )}
        </Reveal>
      ))}
    </div>
  );
}
