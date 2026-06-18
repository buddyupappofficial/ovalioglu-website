"use client";

import { motion, useMotionValue, useReducedMotion, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import {
  CaseStudyBack,
  Reveal,
  SectionLabel,
} from "@/components/case-study/CaseStudyUI";

const galleryItems = [
  {
    title: "Collection I",
    gradient:
      "radial-gradient(ellipse at 30% 20%, #4a3a32 0%, #1a1512 50%, #080807 100%)",
    span: "col-span-2 row-span-2",
  },
  {
    title: "Silk & Shadow",
    gradient:
      "radial-gradient(ellipse at 70% 40%, #3d2e28 0%, #221c18 45%, #080807 100%)",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Intimate",
    gradient:
      "radial-gradient(ellipse at 50% 60%, #352820 0%, #1c1614 50%, #080807 100%)",
    span: "col-span-1 row-span-1",
  },
  {
    title: "Essence",
    gradient:
      "radial-gradient(ellipse at 40% 30%, #5c4a40 0%, #2a221e 50%, #080807 100%)",
    span: "col-span-2 row-span-1",
  },
] as const;

function GalleryItem({
  title,
  gradient,
  span,
  index,
}: {
  title: string;
  gradient: string;
  span: string;
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const prefersReducedMotion = useReducedMotion();
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 120, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 120, damping: 20 });
  const x = useTransform(springX, [-0.5, 0.5], [-8, 8]);
  const y = useTransform(springY, [-0.5, 0.5], [-6, 6]);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (prefersReducedMotion || !ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <Reveal delay={index * 0.08} className={span}>
      <div
        ref={ref}
        onMouseMove={handleMouseMove}
        onMouseLeave={() => {
          mouseX.set(0);
          mouseY.set(0);
        }}
        className="group relative h-full min-h-[200px] overflow-hidden rounded-sm sm:min-h-[240px]"
      >
        <motion.div
          className="absolute inset-[-5%]"
          style={prefersReducedMotion ? undefined : { x, y }}
        >
          <div
            className="h-full w-full transition-transform duration-700 group-hover:scale-[1.03]"
            style={{ background: gradient }}
          />
        </motion.div>
        <div className="absolute inset-0 bg-gradient-to-t from-[#080807]/80 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
        <p className="absolute bottom-5 left-5 font-mono text-[10px] tracking-[0.25em] text-[#d4c4a8]/70 uppercase opacity-0 transition-opacity duration-500 group-hover:opacity-100">
          {title}
        </p>
      </div>
    </Reveal>
  );
}

const sections = [
  {
    label: "Brand Story",
    title: "Zarafetin yeni dili",
    content: [
      "Laperissa, premium iç giyim segmentinde marka deneyimini baştan kurgulayan bir girişim.",
      "Sadece ürün satmak değil — bir yaşam tarzı, bir his ve bir estetik dünya inşa etmek.",
      "Markanın her dokunuş noktası; ambalajdan dijital deneyime kadar tutarlı bir lüks his taşır.",
    ],
  },
  {
    label: "Shopify Infrastructure",
    title: "E-ticaretin omurgası",
    content: [
      "Shopify Plus altyapısı üzerine özel tema geliştirme, ödeme akışları ve envanter yönetimi.",
      "Performans, dönüşüm ve ölçeklenebilirlik odaklı teknik mimari.",
      "Uluslararası satışa hazır, modüler ve sürdürülebilir bir e-ticaret ekosistemi.",
    ],
  },
  {
    label: "Creative Direction",
    title: "Görsel kimlik ve editoryal dil",
    content: [
      "Fotoğraf dili, tipografi ve renk paleti — hepsi markanın sessiz ama güçlü karakterini yansıtır.",
      "Fashion magazine estetiğinden ilham alan, minimal ve sofistike bir görsel dünya.",
      "Her kampanya, markanın premium konumlandırmasını güçlendiren bir editoryal hikâye anlatır.",
    ],
  },
  {
    label: "AI Content Production",
    title: "Yapay zekâ ile içerik üretimi",
    content: [
      "Ürün açıklamaları, sosyal medya içerikleri ve kampanya metinleri için AI destekli üretim süreçleri.",
      "İnsan dokunuşu ve teknolojinin hızını birleştiren hibrit bir içerik modeli.",
      "Marka sesini koruyarak ölçeklenebilir, tutarlı ve yüksek kaliteli içerik üretimi.",
    ],
  },
] as const;

export default function LaperissaCaseStudy() {
  return (
    <main className="relative bg-[#050505] text-[#f5f0e8]">
      {/* Hero */}
      <section className="relative min-h-[85dvh] overflow-hidden px-6 pb-20 pt-32 sm:px-10 sm:pb-28 lg:px-14 lg:pb-36">
        <div className="pointer-events-none absolute inset-0" aria-hidden>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_0%,rgba(212,196,168,0.08),transparent)]" />
          <div
            className="absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                "repeating-linear-gradient(90deg, transparent, transparent 80px, rgba(212,196,168,0.04) 80px, rgba(212,196,168,0.04) 81px)",
            }}
          />
        </div>

        <div className="relative mx-auto w-full max-w-6xl">
          <Reveal>
            <CaseStudyBack accent="warm" />
          </Reveal>

          <Reveal delay={0.1} className="mt-16 sm:mt-24">
            <SectionLabel>Case Study — 02</SectionLabel>
            <h1 className="font-display text-[clamp(4rem,14vw,8.5rem)] leading-[0.9] tracking-[-0.03em] text-[#f5f0e8]">
              Laperissa
            </h1>
            <p className="mt-10 max-w-xl font-mono text-[11px] tracking-[0.3em] text-[#d4c4a8]/60 uppercase">
              Premium Lingerie
            </p>
            <p className="mt-6 max-w-lg text-[17px] leading-[1.8] font-light text-[#8a8278] sm:text-lg">
              Premium iç giyim markası.
            </p>
            <span className="mt-8 inline-flex items-center rounded-sm border border-[#d4c4a8]/25 bg-[#d4c4a8]/[0.06] px-2.5 py-1 text-[10px] font-medium tracking-[0.2em] text-[#d4c4a8]/80 uppercase">
              Canlı Proje
            </span>
          </Reveal>
        </div>
      </section>

      {/* Editorial sections */}
      {sections.map((section, index) => (
        <section
          key={section.label}
          className="border-t border-[#1f1c18] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44"
        >
          <div className="mx-auto max-w-6xl">
            <div className="grid gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-24">
              <Reveal>
                <SectionLabel>{section.label}</SectionLabel>
                <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-[#f5f0e8]">
                  {section.title}
                </h2>
              </Reveal>
              <Reveal delay={0.1} className="flex flex-col justify-center">
                <div className="space-y-6">
                  {section.content.map((paragraph) => (
                    <p
                      key={paragraph.slice(0, 24)}
                      className="text-[16px] leading-[1.85] font-light text-[#8a8278] sm:text-[17px]"
                    >
                      {paragraph}
                    </p>
                  ))}
                </div>
              </Reveal>
            </div>
            {index < sections.length - 1 && (
              <div className="mt-20 h-px w-full bg-gradient-to-r from-[#d4c4a8]/20 via-[#d4c4a8]/5 to-transparent lg:mt-28" />
            )}
          </div>
        </section>
      ))}

      {/* Gallery */}
      <section className="border-t border-[#1f1c18] px-6 py-28 sm:px-10 sm:py-36 lg:px-14 lg:py-44">
        <div className="mx-auto max-w-6xl">
          <Reveal className="mb-16 sm:mb-24">
            <SectionLabel>Gallery</SectionLabel>
            <h2 className="font-display text-[clamp(2rem,5vw,3.25rem)] leading-[1.1] tracking-[-0.02em] text-[#f5f0e8]">
              Görsel dünya
            </h2>
          </Reveal>

          <div className="grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4 lg:grid-rows-2 lg:gap-5">
            {galleryItems.map((item, index) => (
              <GalleryItem key={item.title} {...item} index={index} />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
