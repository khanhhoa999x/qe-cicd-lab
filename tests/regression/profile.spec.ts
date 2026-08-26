import { test, expect } from '@playwright/test';

test.describe('Profile menu', { tag: '@regression' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('menu shows the expected entries', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();

    await expect(page.getByRole('link', { name: 'All Items' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'About' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Logout' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Reset App State' })).toBeVisible();
  });

  test('about link points to Sauce Labs', async ({ page }) => {
    await page.getByRole('button', { name: 'Open Menu' }).click();

    await expect(page.getByRole('link', { name: 'About' })).toHaveAttribute(
      'href',
      'https://saucelabs.com/',
    );
  });
});
