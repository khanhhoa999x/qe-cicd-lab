import { test, expect } from '@playwright/test';

test.describe('Order API', { tag: '@api' }, () => {
  test('fetching a cart returns its products', async ({ request }) => {
    const response = await request.get('/carts/1');

    expect(response.status()).toBe(200);
    const cart = await response.json();
    expect(cart.id).toBe(1);
    expect(cart.products.length).toBeGreaterThan(0);
    expect(cart.totalProducts).toBe(cart.products.length);
  });

  test('unknown cart returns 404', async ({ request }) => {
    const response = await request.get('/carts/999999');

    expect(response.status()).toBe(404);
  });
});
