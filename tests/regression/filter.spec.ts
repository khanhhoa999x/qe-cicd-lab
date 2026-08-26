import { test, expect } from '@playwright/test';

test.describe('Filter', { tag: '@regression' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://www.saucedemo.com/');
    await page.getByPlaceholder('Username').fill('standard_user');
    await page.getByPlaceholder('Password').fill('secret_sauce');
    await page.getByRole('button', { name: 'Login' }).click();
  });

  test('sort by name Z-A puts the last name first', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('za');

    await expect(page.locator('.inventory_item_name').first()).toHaveText(
      'Test.allTheThings() T-Shirt (Red)',
    );
  });

  test('sort by price low-high puts the cheapest first', async ({ page }) => {
    await page.locator('.product_sort_container').selectOption('lohi');

    await expect(page.locator('.inventory_item_price').first()).toHaveText('$7.99');
  });
});
