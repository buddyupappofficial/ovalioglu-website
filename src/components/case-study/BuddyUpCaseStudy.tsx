"use client";

import ArchitectureFlow from "@/components/case-study/buddyup/ArchitectureFlow";
import RoadmapTimeline from "@/components/case-study/buddyup/RoadmapTimeline";
import SocialRadarVisualization from "@/components/case-study/buddyup/SocialRadarVisualization";
import UserJourneyTimeline from "@/components/case-study/buddyup/UserJourneyTimeline";
import {
  CaseStudyBack,
  Reveal,
  SectionLabel,
} from "@/components/case-study/CaseStudyUI";
import AmbientGlow from "@/components/ui/AmbientGlow";
import GrainOverlay from "@/components/ui/GrainOverlay";

const solutions = [
  {
    num: "01",
    title: "Daily Intent",
    description:
      "Kullanıcılar gün içinde ne yapmak istediklerini paylaşır. Kahve, yürüyüş, sinema — gerçek niyetler, gerçek bağlantılara dönüşür.",
  },
  {
    num: "02",
    title: "Social Radar",
    description:
      "Yakınınızdaki insanları ve ortak ilgi alanlarını keşfedin. Sosyal radar, dijital haritada fiziksel yakınlığı anlamlı hale getirir.",
  },
  {
    num: "03",
    title: "Event Based Matching",
    description:
      "Etkinlikler ve buluşmalar üzerinden eşleşme. Ortak deneyimler, kalıcı bağlantıların en doğal başlangıç noktasıdır.",
  },
] as const;

const technologies = [
  { name: "Flutter", detail: "Cross-platform mobile" },
  { name: "Supabase", detail: "Realtime backend" },
  { name: "PostgreSQL", detail: "Relational data" },
  { name: "RLS", detail: "Row-level security" },
  { name: "Geolocation", detail: "Proximity discovery" },
] as const;

const features = [
  {
    title: "Daily Intent",
    description: "Bugün ne yapmak istediğini seç.",
  },
  {
    title: "Social Radar",
    description: "Yakındaki insanları keşfet.",
  },
  {
    title: "Event Matching",
    description: "Etkinlik oluştur veya katıl.",
  },
  {
    title: "Safe Social",
    description: "Kontrollü iletişim ve gerçek etkinlikler.",
  },
] as const;

const distances = [
  "500 metre",
  "1 km",
  "3 km",
  "5 km",
  "10 km",
  "20 km",
] as const;

function HeroRadar() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden>
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(56,189,248,0.1),transparent)]" />
      <div className="absolute inset-0 overflow-hidden">
        {[1, 2, 3, 4, 5].map((ring) => {
          const size = `${ring * 18}%`;
          return (
            <div
              key={ring}
              className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-400/[0.08] opacity-35"
              style={{ width: size, height: size }}
            />
          );
        })}
        <div className="absolute left-1/2 top-1/2 h-[50%] w-[50%] -translate-x-1/2 -translate-y-1/2 origin-center animate-scan">
          <div className="absolute left-0 top-0 h-1/2 w-full origin-bottom rounded-full bg-gradient-to-t from-sky-400/15 via-sky-400/5 to-transparent" />
        </div>
        <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-sky-400/50 shadow-[0_0_40px_rgba(56,189,248,0.4)]" />
      </div>
      <div
        className="absolute inset-0 opacity-[0.25]"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)
          `,
          backgroundSize: "64px 64px",
          maskImage:
            "radial-gradient(ellipse 60% 50% at 50% 40%, black 10%, transparent 70%)",
        }}
      />
    </div>
  );
}

export default function BuddyUpCaseStudy() {
  return (
    <main className="relative overflow-x-hidden bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <GrainOverlay />
      </div>

      {/* ── 1. Hero ── */}
      <section className="relative flex min-h-dvh flex-col justify-end overflow-hidden">
        <AmbientGlow />
        <HeroRadar />

        <div className="relative mx-auto w-full max-w-6xl px-6 pb-24 pt-32 sm:px-10 sm:pb-32 lg:px-14 lg:pb-40">
          <Reveal>
            <CaseStudyBack />
          </Reveal>

          <Reveal delay={0.08} className="mt-20 sm:mt-28">
            <SectionLabel>Case Study — 01</SectionLabel>
            <h1 className="font-sans text-[clamp(4rem,14vw,8rem)] font-medium leading-[0.92] tracking-[-0.04em] text-white">
              BuddyUp
            </h1>
            <p className="mt-10 max-w-xl text-[17px] leading-[1.85] font-light tracking-[-0.01em] text-zinc-400 sm:text-lg">
              Aynı şeyleri yapmak isteyen insanları gerçek hayatta bir araya
              getiren sosyal keşif uygulaması.
            </p>
            <div className="mt-10 flex items-center gap-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/[0.08] px-3 py-1.5 text-[11px] font-medium text-emerald-400">
                <span className="relative flex h-1.5 w-1.5">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald-400 opacity-50" />
                  <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald-400" />
                </span>
                Geliştiriliyor
              </span>
              <span className="font-mono text-[11px] tracking-wider text-zinc-600">
                2024 —
              </span>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── 2. Problem ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-16 lg:grid-cols-[1fr_1.1fr] lg:gap-24">
            <Reveal>
              <SectionLabel>Problem</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-white">
                Modern insanlar neden sosyalleşmekte zorlanıyor?
              </h2>
            </Reveal>
            <Reveal delay={0.1} className="flex flex-col justify-end">
              <div className="space-y-8 text-[16px] leading-[1.9] font-light text-zinc-400 sm:text-[17px]">
                <p>
                  Dijital çağda bağlantı kurmak hiç bu kadar kolay olmamıştı —
                  ama gerçek sosyalleşme hiç bu kadar zor olmamıştı.
                </p>
                <p>
                  İnsanlar ekranlar arasında kayboluyor. Ortak ilgi alanlarını
                  paylaşan insanlarla fiziksel dünyada buluşmak için doğru
                  araçlara sahip değil.
                </p>
                <p className="text-zinc-500">
                  BuddyUp, bu boşluğu kapatmak için doğdu.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── Neden BuddyUp? ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <SectionLabel>Why BuddyUp</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.75rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Neden BuddyUp?
            </h2>
          </Reveal>

          <div className="mt-14 space-y-8 sm:mt-20 sm:space-y-10">
            <Reveal delay={0.08}>
              <p className="text-[17px] leading-[1.9] font-light text-zinc-400 sm:text-lg">
                İnsanların birbirine her zamankinden daha bağlı ama aynı
                zamanda daha yalnız olduğunu düşünüyorum.
              </p>
            </Reveal>
            <Reveal delay={0.14}>
              <p className="text-[17px] leading-[1.9] font-light text-zinc-500 sm:text-lg">
                Sosyal medya insanları birbirine gösteriyor.
              </p>
            </Reveal>
            <Reveal delay={0.2}>
              <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.45] tracking-[-0.01em] text-zinc-300">
                BuddyUp ise insanların gerçekten bir araya gelmesini amaçlıyor.
              </p>
            </Reveal>
            <Reveal delay={0.26}>
              <p className="text-[17px] leading-[1.9] font-light text-zinc-400 sm:text-lg">
                Yeni arkadaşlıkların, ortak ilgi alanlarının ve gerçek
                buluşmaların yeniden değer kazanmasını istiyorum.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ── 3. Solution ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-20 sm:mb-28">
            <SectionLabel>Solution</SectionLabel>
            <h2 className="max-w-2xl font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Üç mekanizma, tek amaç
            </h2>
          </Reveal>

          <div className="space-y-0 divide-y divide-white/[0.06]">
            {solutions.map((item, index) => (
              <Reveal key={item.title} delay={index * 0.08}>
                <div className="group grid gap-6 py-12 transition-colors duration-500 hover:bg-white/[0.01] sm:grid-cols-[6rem_1fr] sm:gap-12 sm:py-16 lg:grid-cols-[8rem_1fr]">
                  <span className="font-mono text-[13px] tracking-wider text-sky-400/50">
                    {item.num}
                  </span>
                  <div>
                    <h3 className="font-sans text-2xl font-medium tracking-[-0.03em] text-white sm:text-3xl">
                      {item.title}
                    </h3>
                    <p className="mt-4 max-w-xl text-[15px] leading-[1.8] text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── Kullanıcı Yolculuğu ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 text-center sm:mb-24">
            <SectionLabel>User Journey</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Kullanıcı Yolculuğu
            </h2>
          </Reveal>

          <UserJourneyTimeline />
        </div>
      </section>

      {/* ── 4. Social Radar ── */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_50%_50%,rgba(56,189,248,0.05),transparent)]" aria-hidden />

        <div className="relative mx-auto max-w-6xl">
          <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionLabel>Social Radar</SectionLabel>
              <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
                Canlı keşif
              </h2>
              <p className="mt-8 max-w-md text-[16px] leading-[1.85] font-light text-zinc-400">
                Yakınınızdaki insanları, ortak niyetleri ve gerçek zamanlı
                aktiviteleri tek bir radar deneyiminde görün. Dijital harita,
                fiziksel dünyaya bağlanır.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="min-w-0">
              <SocialRadarVisualization />
            </Reveal>
          </div>

          {/* Social Radar Details */}
          <Reveal delay={0.2} className="mt-20 sm:mt-28">
            <div className="border-t border-white/[0.06] pt-16 sm:pt-20">
              <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
                {distances.map((distance, index) => (
                  <span
                    key={distance}
                    className="rounded-full border border-white/[0.08] bg-white/[0.02] px-4 py-2 font-mono text-[12px] tracking-wide text-zinc-500 transition-colors duration-500 hover:border-sky-400/20 hover:text-sky-400/80"
                    style={{ opacity: 1 - index * 0.08 }}
                  >
                    {distance}
                  </span>
                ))}
              </div>
              <div className="mx-auto mt-12 max-w-lg text-center">
                <p className="text-[16px] leading-[1.85] font-light text-zinc-400">
                  BuddyUp insanları sana olan fiziksel yakınlığına göre keşfetmeni
                  sağlar.
                </p>
                <p className="mt-4 font-display text-[clamp(1.2rem,2.5vw,1.5rem)] leading-[1.4] tracking-[-0.01em] text-zinc-500">
                  Gerçek bağlantılar bazen sana çok yakın olabilir.
                </p>
              </div>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ── Temel Özellikler ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 sm:mb-24">
            <SectionLabel>Features</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Temel Özellikler
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 sm:gap-5">
            {features.map((feature, index) => (
              <Reveal key={feature.title} delay={index * 0.08}>
                <div className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.06] bg-white/[0.02] p-8 backdrop-blur-md transition-all duration-500 hover:border-sky-400/20 hover:bg-white/[0.04] sm:p-9">
                  <div className="pointer-events-none absolute -inset-px rounded-2xl bg-gradient-to-b from-sky-400/5 to-transparent opacity-0 blur-lg transition-opacity duration-700 group-hover:opacity-100" />
                  <h3 className="relative font-sans text-xl font-medium tracking-[-0.02em] text-white">
                    {feature.title}
                  </h3>
                  <p className="relative mt-3 text-[14px] leading-relaxed text-zinc-500 transition-colors duration-500 group-hover:text-zinc-400">
                    {feature.description}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ── 5. Technology ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 sm:mb-20">
            <SectionLabel>Technology</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Altyapı
            </h2>
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {technologies.map((tech, index) => (
              <Reveal key={tech.name} delay={index * 0.06}>
                <div className="group rounded-2xl border border-white/[0.06] bg-white/[0.02] p-6 transition-all duration-500 hover:border-white/[0.12] hover:bg-white/[0.04]">
                  <p className="font-mono text-[14px] font-medium tracking-wide text-zinc-200">
                    {tech.name}
                  </p>
                  <p className="mt-2 text-[13px] text-zinc-600 transition-colors duration-500 group-hover:text-zinc-500">
                    {tech.detail}
                  </p>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.15} className="mt-20 border-t border-white/[0.06] pt-20 sm:mt-28 sm:pt-28">
            <h3 className="mb-12 text-center font-mono text-[11px] tracking-[0.28em] text-zinc-600 uppercase">
              Mimari Akış
            </h3>
            <ArchitectureFlow />
          </Reveal>
        </div>
      </section>

      {/* ── Yol Haritası ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 sm:mb-24">
            <SectionLabel>Roadmap</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-white">
              Yol Haritası
            </h2>
          </Reveal>

          <RoadmapTimeline />
        </div>
      </section>

      {/* ── Yakında ── */}
      <section className="border-t border-white/[0.06] px-6 py-32 sm:px-10 sm:py-40 lg:px-14 lg:py-48">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel>Coming Soon</SectionLabel>
            <h2 className="font-display text-[clamp(2.25rem,5.5vw,3.5rem)] leading-[1.1] tracking-[-0.02em] text-white">
              BuddyUp Yakında
            </h2>
          </Reveal>

          <Reveal delay={0.1} className="mt-12 flex flex-col items-center justify-center gap-4 sm:mt-16 sm:flex-row">
            <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-3.5 text-[13px] font-medium tracking-[-0.01em] text-zinc-600">
              App Store
            </span>
            <span className="inline-flex cursor-not-allowed items-center rounded-xl border border-white/[0.06] bg-white/[0.02] px-8 py-3.5 text-[13px] font-medium tracking-[-0.01em] text-zinc-600">
              Google Play
            </span>
          </Reveal>

          <Reveal delay={0.18} className="mt-10">
            <p className="text-[15px] font-light text-zinc-600">
              BuddyUp şu anda geliştirme aşamasındadır.
            </p>
          </Reveal>
        </div>
      </section>

      {/* ── 6. Vision + Final ── */}
      <section className="relative overflow-hidden border-t border-white/[0.06] px-6 py-40 sm:px-10 sm:py-52 lg:px-14 lg:py-64">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_100%,rgba(56,189,248,0.06),transparent)]" />
        </div>

        <div className="relative mx-auto max-w-5xl">
          <Reveal>
            <SectionLabel>Vision</SectionLabel>
          </Reveal>
          <Reveal delay={0.12}>
            <p className="font-display text-[clamp(2.25rem,6vw,4.5rem)] leading-[1.2] tracking-[-0.02em] text-zinc-200">
              İnsanların çevresindeki insanları yeniden keşfetmesini
              istiyoruz.
            </p>
          </Reveal>
          <Reveal delay={0.24} className="mt-12">
            <a
              href="/#work"
              className="inline-flex items-center gap-2 text-[13px] font-medium tracking-[-0.01em] text-zinc-500 transition-colors duration-300 hover:text-zinc-300"
            >
              <svg width="12" height="12" viewBox="0 0 12 12" fill="none" aria-hidden>
                <path
                  d="M7.5 2.5L3.5 6L7.5 9.5"
                  stroke="currentColor"
                  strokeWidth="1.25"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
              Tüm projeler
            </a>
          </Reveal>

          <Reveal delay={0.36} className="mt-24 border-t border-white/[0.06] pt-20 sm:mt-32 sm:pt-28">
            <p className="font-display text-[clamp(1.35rem,3vw,1.85rem)] leading-[1.55] tracking-[-0.01em] text-zinc-500 italic">
              Çünkü bazen iyi bir arkadaşlık,
              <br />
              aynı kahveyi içmek istemekle başlar.
            </p>
          </Reveal>
        </div>
      </section>
    </main>
  );
}
