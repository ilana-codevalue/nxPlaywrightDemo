import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('/');

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('has Lib1', async ({ page }) => {
  await page.goto('/');

  // Expect Lib1 to contain a substring.
  expect(await page.locator('#root > div > div:nth-child(6) > ul > li:nth-child(2) > a').innerText()).toContain('Lib1');
});
