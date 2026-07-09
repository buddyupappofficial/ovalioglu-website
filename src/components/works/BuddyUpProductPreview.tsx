"use client";

import type { CSSProperties, ReactNode } from "react";
import BuddyUpLogo from "@/components/ui/BuddyUpLogo";

function PhoneFrame({ children }: { children: ReactNode }) {
  return (
    <div className="relative mx-auto w-[220px] shrink-0 sm:w-[240px]">
      <div className="rounded-[2rem] border border-white/[0.1] bg-background-elevated p-2 shadow-[0_24px_80px_rgba(0,0,0,0.35)]">
        <div className="overflow-hidden rounded-[1.5rem] bg-surface">
          <div className="flex items-center justify-between border-b border-white/[0.06] px-4 py-3">
            <BuddyUpLogo size="xs" />
            <span className="rounded-full bg-sky-500/15 px-2 py-0.5 text-[8px] font-medium text-sky-400">
              Canlı
            </span>
          </div>
          {children}
        </div>
      </div>
      <div className="pointer-events-none absolute -inset-4 -z-10 rounded-[2.5rem] bg-sky-500/8 blur-2xl" />
    </div>
  );
}

function RadarBlip({
  label,
  emoji,
  style,
}: {
  label: string;
  emoji: string;
  style: CSSProperties;
}) {
  return (
    <div className="absolute" style={style}>
      <div className="flex items-center gap-1 rounded-full glass-panel px-2 py-1">
        <span className="text-[10px]">{emoji}</span>
        <span className="text-[8px] font-medium text-secondary">{label}</span>
      </div>
    </div>
  );
}

function PersonDot({ style }: { style: React.CSSProperties }) {
  return (
    <div
      className="absolute h-2 w-2 rounded-full border border-sky-300/30 bg-sky-400/70 shadow-[0_0_8px_rgba(56,189,248,0.35)]"
      style={style}
    />
  );
}

export default function BuddyUpProductPreview() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl glass-preview sm:aspect-[16/8.5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_40%,rgba(120,140,255,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_80%_80%,rgba(139,92,246,0.04),transparent)]" />

      <div className="absolute left-5 top-5 z-10 sm:left-6 sm:top-6">
        <BuddyUpLogo size="sm" />
      </div>

      <div className="relative flex h-full items-center justify-center gap-6 px-6 py-8 sm:gap-10 sm:px-10">
        <PhoneFrame>
          <div className="px-4 py-4">
            <p className="font-mono text-[8px] tracking-[0.14em] text-muted uppercase">
              Günlük Niyet
            </p>
            <p className="mt-2 text-[13px] font-medium leading-snug text-foreground">
              Bugün ne yapmak istiyorsun?
            </p>
            <div className="mt-4 space-y-2">
              {[
                { emoji: "☕", label: "Kahve", active: true },
                { emoji: "🚶", label: "Yürüyüş", active: false },
                { emoji: "🎬", label: "Sinema", active: false },
              ].map((item) => (
                <div
                  key={item.label}
                  className={`flex items-center gap-2 rounded-xl border px-3 py-2 ${
                    item.active
                      ? "border-sky-500/25 bg-sky-500/10"
                      : "border-white/[0.06] bg-white/[0.03]"
                  }`}
                >
                  <span className="text-sm">{item.emoji}</span>
                  <span className="text-[11px] text-secondary">{item.label}</span>
                </div>
              ))}
            </div>
          </div>
        </PhoneFrame>

        <PhoneFrame>
          <div className="relative h-[280px] sm:h-[300px]">
            <div className="border-b border-white/[0.06] px-4 py-3">
              <p className="font-mono text-[8px] tracking-[0.14em] text-muted uppercase">
                Social Radar
              </p>
              <p className="mt-1 text-[11px] text-body">500m · 3 kişi yakında</p>
            </div>

            <div className="relative h-[calc(100%-3.25rem)] overflow-hidden">
              {[1, 2, 3].map((ring) => (
                <div
                  key={ring}
                  className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/8"
                  style={{ width: `${ring * 28}%`, height: `${ring * 28}%` }}
                />
              ))}
              <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400 shadow-[0_0_12px_rgba(56,189,248,0.4)]" />

              <RadarBlip
                emoji="☕"
                label="Kahve"
                style={{ left: "18%", top: "22%" }}
              />
              <RadarBlip
                emoji="🎬"
                label="Sinema"
                style={{ right: "12%", top: "30%" }}
              />
              <PersonDot style={{ left: "35%", top: "48%" }} />
              <PersonDot style={{ right: "28%", top: "55%" }} />
              <PersonDot style={{ left: "52%", top: "68%" }} />

              <div className="absolute inset-x-3 bottom-3 rounded-xl glass-panel p-2.5">
                <p className="text-[9px] font-medium text-foreground">
                  Etkinlik · Kadıköy Kahve Buluşması
                </p>
                <p className="mt-0.5 text-[8px] text-muted">2 kişi katılıyor · 450m</p>
              </div>
            </div>
          </div>
        </PhoneFrame>
      </div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-background-elevated/80 to-transparent" />
    </div>
  );
}
