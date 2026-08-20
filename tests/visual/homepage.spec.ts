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
}

test("homepage at generated-mockup viewport", async ({ page }) => {
  await page.setViewportSize({ width: 1122, height: 1402 });
  await prepare(page);
  await page.screenshot({
    path: `${artifactDir}/homepage-1122x1402.png`,
    fullPage: false,
  });
});

test("homepage at desktop review viewport", async ({ page }) => {
  await page.setViewportSize({ width: 1534, height: 926 });
  await prepare(page);
  await page.screenshot({
    path: `${artifactDir}/homepage-1534x926.png`,
    fullPage: false,
  });
});

test("homepage full page", async ({ page }) => {
  await page.setViewportSize({ width: 1122, height: 1402 });
  await prepare(page);
  await page.screenshot({
    path: `${artifactDir}/homepage-full.png`,
    fullPage: true,
  });
});
