import { test, expect } from '@playwright/test';

test.describe('Notification', { tag: '@regression' }, () => {
  test('a flash notification appears after the action', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/notification_message_rendered');

    await page.getByRole('link', { name: 'Click here' }).click();

    // The site randomly shows "Action successful" or "Action unsuccessful".
    await expect(page.locator('#flash')).toContainText(/Action (un)?successful(, please try again)/);
  });
});
