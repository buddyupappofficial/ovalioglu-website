"use client";

import { motion } from "framer-motion";
import Image, { type StaticImageData } from "next/image";
import Link from "next/link";
import BuddyUpProductPreview from "@/components/works/BuddyUpProductPreview";
import PatternOSProductPreview from "@/components/works/PatternOSProductPreview";
import BuddyUpLogo from "@/components/ui/BuddyUpLogo";
import { blurReveal, viewport } from "@/lib/motion";

type VisualVariant = "laperissa" | "laperissa-global" | "buddyup" | "patternos";

type ProductShowcaseCardProps = {
  title: string;
  domain: string;
  status?: readonly string[];
  description: string;
  highlights?: readonly string[];
  href: string;
  external?: boolean;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
  variant: VisualVariant;
  index: number;
  reversed?: boolean;
};

function ProductVisual({
  variant,
  imageSrc,
  imageAlt,
}: {
  variant: VisualVariant;
  imageSrc?: string | StaticImageData;
  imageAlt?: string;
}) {
  if (imageSrc) {
    return (
      <div className="product-stage-inner relative aspect-[16/9] w-full overflow-hidden rounded-2xl glass-preview sm:aspect-[16/8.5]">
        <Image
          src={imageSrc}
          alt={imageAlt ?? ""}
          fill
          sizes="(max-width: 768px) 100vw, 1280px"
          className="object-cover object-top"
          priority={variant === "laperissa"}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-background-elevated/40 via-transparent to-transparent" />
      </div>
    );
  }

  if (variant === "laperissa-global") {
    return (
      <div className="product-stage-inner relative aspect-[16/9] w-full overflow-hidden rounded-2xl glass-preview sm:aspect-[16/8.5]">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_70%_at_30%_20%,rgba(212,196,168,0.12),transparent)]" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_80%_80%,rgba(120,140,255,0.05),transparent)]" />
        <div className="absolute inset-x-8 top-8 bottom-8 rounded-xl glass-panel">
          <div className="flex items-center gap-2 border-b border-white/[0.05] px-5 py-3">
            <div className="h-2 w-2 rounded-full bg-[#d4c4a8]/40" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <div className="h-2 w-2 rounded-full bg-white/10" />
            <span className="ml-3 font-mono text-[10px] text-muted">
              laperissa.com
            </span>
          </div>
          <div className="flex h-[calc(100%-2.5rem)] flex-col justify-end p-8">
            <p className="font-display text-3xl tracking-[-0.02em] text-foreground/90 sm:text-4xl">
              Crafted with intention.
            </p>
            <p className="mt-2 text-[13px] text-muted">
              Manufacturing &amp; brand presence.
            </p>
          </div>
        </div>
      </div>
    );
  }

  if (variant === "buddyup") {
    return (
      <div className="product-stage-inner">
        <BuddyUpProductPreview />
      </div>
    );
  }

  if (variant === "patternos") {
    return (
      <div className="product-stage-inner">
        <PatternOSProductPreview />
      </div>
    );
  }

  return null;
}

export default function ProductShowcaseCard({
  title,
  domain,
  status,
  description,
  highlights,
  href,
  external,
  imageSrc,
  imageAlt,
  variant,
  index,
  reversed,
}: ProductShowcaseCardProps) {
  const Wrapper = external ? "a" : Link;
  const linkProps = external
    ? { href, target: "_blank", rel: "noopener noreferrer" }
    : { href };

  return (
    <motion.article
      custom={0.1 + index * 0.08}
      initial="hidden"
      whileInView="visible"
      viewport={viewport}
      variants={blurReveal}
      className="group"
    >
      <Wrapper {...linkProps} className="block cursor-pointer">
        <div
          className={`grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-20 xl:gap-28 ${
            reversed ? "lg:[&>*:first-child]:order-2" : ""
          }`}
        >
          <div className="space-y-6 lg:space-y-8">
            {status && status.length > 0 && (
              <div className="flex flex-wrap gap-2">
                {status.map((tag) => (
                  <span
                    key={tag}
                    className="rounded-full border border-white/[0.08] bg-white/[0.04] px-3 py-1 font-mono text-[9px] tracking-[0.14em] text-secondary uppercase backdrop-blur-sm"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            )}
            <p className="font-mono text-[11px] tracking-[0.16em] text-muted">
              {domain}
            </p>
            <h3 className="flex items-center gap-3 font-display text-[clamp(2.5rem,5vw,4rem)] leading-[1.02] tracking-[-0.02em] text-foreground">
              {variant === "buddyup" && (
                <span className="mt-1 shrink-0">
                  <BuddyUpLogo size="md" />
                </span>
              )}
              {title}
            </h3>
            <p className="max-w-md text-[17px] leading-relaxed tracking-[-0.01em] text-body">
              {description}
            </p>
            {highlights && highlights.length > 0 && (
              <ul className="flex flex-wrap gap-x-5 gap-y-2">
                {highlights.map((item) => (
                  <li
                    key={item}
                    className="text-[13px] tracking-[-0.01em] text-muted"
                  >
                    <span className="text-secondary/50">•</span> {item}
                  </li>
                ))}
              </ul>
            )}
            <p className="text-[13px] font-medium tracking-[-0.01em] text-muted transition-colors duration-500 group-hover:text-secondary">
              Learn more →
            </p>
          </div>

          <div className="product-stage transition-transform duration-700 ease-out group-hover:scale-[1.015]">
            <ProductVisual
              variant={variant}
              imageSrc={imageSrc}
              imageAlt={imageAlt}
            />
          </div>
        </div>
      </Wrapper>
    </motion.article>
  );
}
