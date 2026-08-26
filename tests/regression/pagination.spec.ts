import { test, expect } from '@playwright/test';

test.describe('Pagination', { tag: '@regression' }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('https://datatables.net/examples/basic_init/zero_configuration.html');
  });

  test('first page shows 10 rows', async ({ page }) => {
    await expect(page.locator('#example tbody tr')).toHaveCount(10);
    await expect(page.locator('#example_info')).toContainText('Showing 1 to 10');
  });

  test('next button moves to the second page', async ({ page }) => {
    await page.getByRole('link', { name: 'Next' }).click();

    await expect(page.locator('#example_info')).toContainText('Showing 11 to 20');
  });
});
