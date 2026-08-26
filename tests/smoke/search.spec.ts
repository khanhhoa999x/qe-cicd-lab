import { test, expect } from '@playwright/test';

test.describe('Search', { tag: '@smoke' }, () => {
  test('docs search returns results', async ({ page }) => {
    await page.goto('https://playwright.dev/');

    await page.getByRole('button', { name: 'Search' }).click();
    await page.getByPlaceholder('Search docs').fill('locators');

    await expect(page.locator('.DocSearch-Hit').first()).toBeVisible();
  });
});
