import type { StaticImageData } from "next/image";
import homepagePreview from "../../public/works/laperissa/homepage-preview.jpg";

/**
 * Laperissa brand preview configuration.
 *
 * To refresh the homepage screenshot:
 *   npm run capture:laperissa
 */
export const laperissaBrand = {
  websiteUrl: "https://www.laperissa.com.tr",
  homepagePreviewSrc: homepagePreview satisfies StaticImageData,
  homepagePreviewAlt: "Laperissa ana sayfa önizlemesi",
  tags: [
    "Shopify",
    "Brand Building",
    "E-Commerce",
    "AI Content",
    "Creative Direction",
  ],
} as const;
