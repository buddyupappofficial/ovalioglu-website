import type { ReactNode } from "react";

type SectionProps = {
  id?: string;
  children: ReactNode;
  className?: string;
  glow?: "warm" | "cool" | "neutral";
};

const glowStyles = {
  warm: "bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(212,196,168,0.06),transparent)]",
  cool: "bg-[radial-gradient(ellipse_85%_55%_at_50%_0%,rgba(120,140,255,0.05),transparent)]",
  neutral:
    "bg-[radial-gradient(ellipse_90%_65%_at_50%_10%,rgba(255,255,255,0.05),transparent)]",
};

export default function Section({
  id,
  children,
  className = "",
  glow = "neutral",
}: SectionProps) {
  return (
    <section
      id={id}
      className={`relative bg-background px-6 py-36 sm:px-10 sm:py-44 lg:px-14 lg:py-56 ${className}`}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-white/[0.04] to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-white/[0.02] to-transparent" />
      <div
        className={`pointer-events-none absolute inset-0 ${glowStyles[glow]}`}
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(255,255,255,0.02),transparent)]"
        aria-hidden
      />
      <div className="relative">{children}</div>
    </section>
  );
}
