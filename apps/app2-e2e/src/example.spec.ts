import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4301');
});

test('has title', async ({ page }) => {

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});


test('has Lib2', async ({ page }) => {

  // Expect Lib1 to contain a substring.
  expect(await page.locator('#root > div > div:nth-child(9) > ul > li:nth-child(3) > a').innerText()).toContain('Lib2');
});

