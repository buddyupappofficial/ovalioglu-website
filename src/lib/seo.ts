export const siteUrl = "https://www.ovalioglu.com.tr";

export const siteName = "Fırat Ovalıoğlu";

export const defaultTitle =
  "Fırat Ovalıoğlu | Product Builder & Digital Commerce";

export const defaultDescription =
  "Fırat Ovalıoğlu tarafından geliştirilen dijital ürünler, e-ticaret sistemleri ve yapay zeka destekli projeler. BuddyUp, Laperissa ve PatternOS geliştirme süreçleri.";

export const keywords = [
  "Fırat Ovalıoğlu",
  "Ovalıoğlu",
  "BuddyUp",
  "Laperissa",
  "PatternOS",
  "E-Ticaret",
  "Shopify",
  "Yapay Zeka",
  "Product Builder",
] as const;

export const linkedInUrl = "https://www.linkedin.com/in/firat-ovalioglu/";

export const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Fırat Ovalıoğlu",
  jobTitle: "Product Builder",
  url: siteUrl,
  sameAs: [linkedInUrl],
  subjectOf: [
    { "@type": "CreativeWork", name: "BuddyUp" },
    { "@type": "CreativeWork", name: "Laperissa" },
    { "@type": "CreativeWork", name: "PatternOS" },
  ],
} as const;
