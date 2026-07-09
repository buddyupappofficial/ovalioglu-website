"use client";

import { motion, useReducedMotion } from "framer-motion";
import ProductShowcaseCard from "@/components/works/ProductShowcaseCard";
import { laperissaGlobalBrand } from "@/config/laperissa-global";
import { laperissaBrand } from "@/config/laperissa";
import Section from "@/components/ui/Section";
import { blurReveal, viewport } from "@/lib/motion";

const showcaseProjects = [
  {
    title: "Laperissa.com.tr",
    domain: "laperissa.com.tr",
    status: ["LIVE PRODUCT", "DIGITAL COMMERCE"] as const,
    description:
      "Next.js tabanlı özel vitrin, Shopify checkout ve ödeme altyapısı, katalog otomasyonu ve pazaryeri senkronizasyonuyla geliştirilen canlı bir D2C e-ticaret platformu.",
    highlights: [
      "Next.js Storefront",
      "Shopify Checkout",
      "Payment Infrastructure",
      "Catalog Automation",
      "Marketplace Sync",
      "SEO Architecture",
    ],
    href: "https://www.laperissa.com.tr",
    external: true,
    imageSrc: laperissaBrand.homepagePreviewSrc,
    imageAlt: laperissaBrand.homepagePreviewAlt,
    variant: "laperissa" as const,
    reversed: false,
  },
  {
    title: "Laperissa.com",
    domain: "laperissa.com",
    status: ["GLOBAL PLATFORM", "BRAND PRESENCE"] as const,
    description:
      "Laperissa'nın global marka kimliğini, üretim gücünü ve uluslararası vitrinini yansıtan kurumsal platform. Üretim varlığı ve B2B iletişim için tasarlandı.",
    highlights: [
      "Brand Identity",
      "Manufacturing Presence",
      "B2B Communication",
      "Global Showcase",
    ],
    href: "https://www.laperissa.com",
    external: true,
    imageSrc: laperissaGlobalBrand.homepagePreviewSrc,
    imageAlt: laperissaGlobalBrand.homepagePreviewAlt,
    variant: "laperissa-global" as const,
    reversed: true,
  },
  {
    title: "BuddyUp",
    domain: "Social Discovery Platform",
    status: ["MOBILE PRODUCT", "PRE-LAUNCH"] as const,
    description:
      "Flutter ve Supabase altyapısıyla geliştirilen, insanların ortak aktiviteler üzerinden gerçek hayatta buluşmasını sağlayan sosyal keşif platformu.",
    highlights: ["Social Radar", "Daily Intent", "AI Moderation"],
    href: "/works/buddyup",
    external: false,
    variant: "buddyup" as const,
    reversed: false,
  },
  {
    title: "PatternOS",
    domain: "Production Intelligence",
    status: ["R&D", "PRODUCTION INTELLIGENCE"] as const,
    description:
      "Yapay zeka destekli tekstil üretimi, dijital kalıp sistemleri ve CAD iş akışlarını bir araya getiren üretim zekası platformu.",
    highlights: [
      "AI Textile Production",
      "CAD Workflows",
      "Digital Pattern Systems",
      "Manufacturing Intelligence",
    ],
    href: "#work",
    external: false,
    variant: "patternos" as const,
    reversed: true,
  },
] as const;

export default function FeaturedProjects() {
  const prefersReducedMotion = useReducedMotion();

  const headerMotion = prefersReducedMotion
    ? {}
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport };

  return (
    <Section id="work" glow="warm">
      <div className="mx-auto max-w-6xl">
        <motion.header
          {...headerMotion}
          variants={blurReveal}
          custom={0}
          className="mb-24 text-center sm:mb-32 lg:mb-40"
        >
          <p className="mb-6 font-mono text-[11px] tracking-[0.2em] text-muted uppercase">
            Products
          </p>
          <h2 className="font-display text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.02em] text-foreground">
            Ürün Çıkaran Projeler
          </h2>
        </motion.header>

        <div className="flex flex-col gap-32 sm:gap-40 lg:gap-52">
          {showcaseProjects.map((project, index) => (
            <ProductShowcaseCard
              key={project.title}
              {...project}
              index={index}
            />
          ))}
        </div>
      </div>
    </Section>
  );
}
