import { test, expect } from '@playwright/test';

test.describe.configure({ mode: 'parallel' });

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:4201');
});

test('has title', async ({ page }) => {

  // Expect h1 to contain a substring.
  expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('Lib1 visible', async ({ page }) => {

  // Expect Lib1 to contain a substring.
  expect(await page.getByRole("link", { name: 'Lib1' }).isVisible()).toBe(true)
});

