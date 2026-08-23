import AxeBuilder from '@axe-core/playwright';
import { expect, test } from '@playwright/test';

const routes = [
  '/',
  '/podcast',
  '/articles',
  '/projects',
  '/showcase',
  '/events',
  '/community',
  '/notes',
  '/client-work',
  '/about',
  '/join',
  '/articles/local-first-by-default',
  '/events/south-mountain-developer-meetup',
  '/client-work/blue-stone-facility-services',
  '/this-page-does-not-exist',
];

for (const theme of ['dark', 'light'] as const) {
  for (const route of routes) {
    test(`${route} passes automated accessibility checks in ${theme} theme`, async ({ page }) => {
      await page.addInitScript((selectedTheme) => {
        localStorage.setItem('smt-theme', selectedTheme);
      }, theme);
      await page.goto(route);

      const results = await new AxeBuilder({ page })
        .withTags(['wcag2a', 'wcag2aa', 'wcag21a', 'wcag21aa', 'wcag22aa', 'section508'])
        .analyze();

      expect(results.violations).toEqual([]);
    });
  }
}

test('visible page copy is at least 16 CSS pixels', async ({ page }) => {
  for (const route of routes) {
    await page.goto(route);
    const undersized = await page.locator('body').evaluate((body) => {
      const failures: string[] = [];
      for (const element of body.querySelectorAll<HTMLElement>('*')) {
        if (element.closest('svg') || element.hidden) continue;
        if (
          ![...element.childNodes].some(
            (node) => node.nodeType === Node.TEXT_NODE && node.textContent?.trim(),
          )
        )
          continue;

        const style = getComputedStyle(element);
        const rect = element.getBoundingClientRect();
        if (
          style.display === 'none' ||
          style.visibility === 'hidden' ||
          rect.width === 0 ||
          rect.height === 0
        )
          continue;

        const size = Number.parseFloat(style.fontSize);
        if (size < 16)
          failures.push(
            `${element.tagName.toLowerCase()}.${element.className || '(no-class)'}: ${size}px`,
          );
      }
      return failures;
    });

    expect(undersized, `Undersized visible text on ${route}`).toEqual([]);
  }
});

test('content reflows without horizontal page scrolling at 320 CSS pixels', async ({ page }) => {
  await page.setViewportSize({ width: 320, height: 900 });
  for (const route of routes) {
    await page.goto(route);
    const dimensions = await page.evaluate(() => ({
      clientWidth: document.documentElement.clientWidth,
      scrollWidth: document.documentElement.scrollWidth,
    }));
    expect(dimensions.scrollWidth, `Horizontal overflow on ${route}`).toBeLessThanOrEqual(
      dimensions.clientWidth,
    );
  }
});

test('search dialog traps focus, closes with Escape, and restores focus', async ({ page }) => {
  await page.goto('/');
  const trigger = page.getByRole('button', { name: 'Search site' });
  await trigger.click();

  const dialog = page.getByRole('dialog', { name: 'Search South Mountain Technologies' });
  const input = page.getByRole('textbox', { name: 'Search projects, podcast, and articles' });
  await expect(input).toBeFocused();

  await page.keyboard.press('Shift+Tab');
  await expect(dialog.getByRole('link', { name: 'Events', exact: true })).toBeFocused();

  await page.keyboard.press('Tab');
  await expect(input).toBeFocused();

  await page.keyboard.press('Escape');
  await expect(trigger).toBeFocused();
});
