import { mkdir } from "node:fs/promises";
import { test } from "@playwright/test";

const artifactDir = "artifacts/visual";

async function prepare(page: import("@playwright/test").Page) {
  await mkdir(artifactDir, { recursive: true });
  await page.addInitScript(() => {
    localStorage.setItem("smtn-theme", "dark");
  });
  await page.goto("/", { waitUntil: "networkidle" });
  await page.evaluate(async () => {
    await document.fonts.ready;
  });
  // Capture the electric-current animation while a route is visibly active.
  await page.waitForTimeout(1400);
}

const viewports = [
  { name: "phone", width: 390, height: 844 },
  { name: "tablet", width: 768, height: 1024 },
  { name: "desktop", width: 1440, height: 900 },
  { name: "desktop-wide", width: 1920, height: 1080 },
  { name: "ultrawide", width: 2560, height: 1440 },
] as const;

for (const viewport of viewports) {
  test(`homepage ${viewport.name}`, async ({ page }) => {
    await page.setViewportSize({ width: viewport.width, height: viewport.height });
    await prepare(page);
    await page.screenshot({
      path: `${artifactDir}/homepage-${viewport.name}-${viewport.width}x${viewport.height}.png`,
      fullPage: false,
    });
  });
}

test("homepage full page", async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await prepare(page);
  await page.screenshot({
    path: `${artifactDir}/homepage-full.png`,
    fullPage: true,
  });
});
