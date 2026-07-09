"use client";

function PatternPiece({
  d,
  className = "stroke-violet-400/40",
}: {
  d: string;
  className?: string;
}) {
  return (
    <path
      d={d}
      fill="rgba(167,139,250,0.05)"
      strokeWidth="0.75"
      className={className}
    />
  );
}

export default function PatternOSProductPreview() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-2xl glass-preview sm:aspect-[16/8.5]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_30%_30%,rgba(139,92,246,0.08),transparent)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_85%_70%,rgba(217,70,239,0.04),transparent)]" />

      <div className="relative flex h-full flex-col p-4 sm:p-5">
        <div className="mb-3 flex items-center justify-between rounded-xl glass-panel px-4 py-2.5">
          <div className="flex items-center gap-3">
            <div className="flex gap-1.5">
              <span className="h-2 w-2 rounded-full bg-violet-400/50" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
              <span className="h-2 w-2 rounded-full bg-white/10" />
            </div>
            <span className="font-mono text-[10px] tracking-[0.12em] text-secondary">
              PatternOS · CAD Workspace
            </span>
          </div>
          <span className="rounded-full border border-violet-500/15 bg-violet-500/8 px-2 py-0.5 text-[8px] font-medium text-violet-300/90">
            AI Assisted
          </span>
        </div>

        <div className="flex min-h-0 flex-1 gap-3">
          <div className="hidden w-12 shrink-0 flex-col gap-2 rounded-xl glass-panel p-2 sm:flex">
            {["⌖", "✂", "📐", "◇", "◎"].map((icon) => (
              <div
                key={icon}
                className="flex h-8 w-8 items-center justify-center rounded-lg border border-white/[0.05] bg-white/[0.03] text-[11px] text-muted"
              >
                {icon}
              </div>
            ))}
          </div>

          <div className="relative min-w-0 flex-1 overflow-hidden rounded-xl border border-white/[0.06] bg-background">
            <div
              className="absolute inset-0 opacity-25"
              style={{
                backgroundImage: `
                  linear-gradient(rgba(167,139,250,0.1) 1px, transparent 1px),
                  linear-gradient(90deg, rgba(167,139,250,0.1) 1px, transparent 1px)
                `,
                backgroundSize: "24px 24px",
              }}
            />

            <div className="absolute left-3 top-3 rounded-md glass-panel px-2 py-1">
              <p className="font-mono text-[8px] tracking-wider text-muted uppercase">
                Ölçü Grid · cm
              </p>
            </div>

            <svg
              viewBox="0 0 400 260"
              className="absolute inset-0 h-full w-full"
              aria-hidden
            >
              <PatternPiece d="M60 40 L140 30 L155 120 L130 200 L70 190 Z" />
              <PatternPiece d="M200 50 L280 45 L295 130 L270 210 L210 205 Z" />
              <PatternPiece d="M310 80 L370 75 L385 150 L360 220 L315 215 Z" className="stroke-fuchsia-400/35" />

              <line x1="60" y1="220" x2="155" y2="220" stroke="rgba(167,139,250,0.2)" strokeWidth="0.5" strokeDasharray="3 2" />
              <line x1="200" y1="230" x2="295" y2="230" stroke="rgba(167,139,250,0.2)" strokeWidth="0.5" strokeDasharray="3 2" />

              <circle cx="140" cy="30" r="2" fill="rgba(167,139,250,0.4)" />
              <circle cx="280" cy="45" r="2" fill="rgba(167,139,250,0.4)" />
            </svg>

            <div className="absolute bottom-3 left-3 right-3 flex flex-wrap gap-2">
              {["Front Bodice", "Back Panel", "Sleeve L"].map((label) => (
                <span
                  key={label}
                  className="rounded-md glass-panel px-2 py-1 text-[8px] text-body"
                >
                  {label}
                </span>
              ))}
            </div>
          </div>

          <div className="hidden w-[140px] shrink-0 flex-col gap-2 sm:flex lg:w-[160px]">
            <div className="rounded-xl border border-violet-500/12 bg-violet-500/[0.05] p-3">
              <p className="font-mono text-[8px] tracking-wider text-violet-400/70 uppercase">
                AI Assistant
              </p>
              <p className="mt-2 text-[9px] leading-relaxed text-body">
                Beden M ölçüsünde kol genişliği optimize edildi.
              </p>
              <p className="mt-2 text-[8px] text-violet-300/60">
                +2.4% verim artışı
              </p>
            </div>

            <div className="flex-1 rounded-xl glass-panel p-3">
              <p className="font-mono text-[8px] tracking-wider text-muted uppercase">
                Production Intel
              </p>
              <div className="mt-3 space-y-2">
                {[
                  { label: "Kalıp Seti", value: "12 parça" },
                  { label: "Beden", value: "XS–XL" },
                  { label: "Fire", value: "%3.1" },
                ].map((row) => (
                  <div key={row.label} className="flex justify-between gap-2">
                    <span className="text-[8px] text-muted">{row.label}</span>
                    <span className="text-[8px] font-medium text-secondary">
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-violet-500/6 via-transparent to-transparent opacity-60" />
    </div>
  );
}
