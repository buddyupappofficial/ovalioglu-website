import type { StaticImageData } from "next/image";
import homepagePreview from "../../public/works/laperissa-global/homepage-preview.jpg";

/**
 * Laperissa Global brand preview configuration.
 *
 * To refresh the homepage screenshot:
 *   npm run capture:laperissa-global
 */
export const laperissaGlobalBrand = {
  websiteUrl: "https://www.laperissa.com",
  homepagePreviewSrc: homepagePreview satisfies StaticImageData,
  homepagePreviewAlt: "Laperissa Global ana sayfa önizlemesi",
} as const;
