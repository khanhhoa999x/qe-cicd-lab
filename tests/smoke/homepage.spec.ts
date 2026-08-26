import { test, expect } from '@playwright/test';

test.describe('Homepage', { tag: '@smoke' }, () => {
  test('homepage loads with the login form', async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');

    await expect(page).toHaveTitle('Swag Labs');
    await expect(page.getByText('Swag Labs')).toBeVisible();
    await expect(page.getByPlaceholder('Username')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Login' })).toBeVisible();
  });
});
