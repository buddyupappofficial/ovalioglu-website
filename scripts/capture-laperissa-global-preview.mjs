import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const outputDir = path.join(__dirname, "../public/works/laperissa-global");
const outputPath = path.join(outputDir, "homepage-preview.jpg");

await mkdir(outputDir, { recursive: true });

let browser;
try {
  browser = await chromium.launch({ channel: "chrome" }).catch(() =>
    chromium.launch(),
  );
} catch {
  console.error(
    "Playwright Chromium is missing. Run: npx playwright install chromium",
  );
  process.exit(1);
}

const page = await browser.newPage({
  viewport: { width: 1440, height: 900 },
});

await page.goto("https://www.laperissa.com", {
  waitUntil: "networkidle",
  timeout: 60000,
});

await page.waitForTimeout(2000);

const acceptCookies = page.getByRole("button", {
  name: /accept all|tümünü kabul et/i,
});
if (await acceptCookies.isVisible().catch(() => false)) {
  await acceptCookies.click();
  await page.waitForTimeout(1000);
}

await page
  .waitForSelector("text=/Laperissa|LA PERISSA|Manufacturing|Üretim/i", {
    timeout: 15000,
  })
  .catch(() => {});

await page.screenshot({
  path: outputPath,
  type: "jpeg",
  quality: 90,
  fullPage: false,
});

await browser.close();
console.log(`Saved preview to ${outputPath}`);
