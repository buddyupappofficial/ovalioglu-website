import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/works/laperissa");
const outputPath = path.join(outputDir, "homepage-preview.jpg");

await mkdir(outputDir, { recursive: true });

const browser = await chromium.launch();
const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto("https://www.laperissa.com.tr", {
  waitUntil: "networkidle",
  timeout: 60000,
});

await page.waitForTimeout(2000);

await page.screenshot({
  path: outputPath,
  type: "jpeg",
  quality: 90,
  fullPage: false,
});

await browser.close();
console.log(`Saved preview to ${outputPath}`);
