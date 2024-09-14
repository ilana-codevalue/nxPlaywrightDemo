import { test, expect } from '@playwright/test';
import { link } from 'fs';

test.beforeEach(async ({ page }) => {
  await page.goto('/');
});

test('has title', async ({ page }) => {

  // Expect h1 to contain a substring.
  // expect(await page.locator('h1').innerText()).toContain('Welcome');
});

test('Lib1 visible', async ({ page }) => {

  // Expect Lib1 to contain a substring.
  // expect(await page.getByRole("link", { name: 'Lib1' }).isVisible()).toBe(true)
});

