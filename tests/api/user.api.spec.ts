import { test, expect } from '@playwright/test';

test.describe('User API', { tag: '@api' }, () => {
  test('fetching a user by id returns their profile', async ({ request }) => {
    const response = await request.get('/users/1');

    expect(response.status()).toBe(200);
    const user = await response.json();
    expect(user.id).toBe(1);
    expect(user.firstName).toBe('Emily');
    expect(user.email).toContain('@');
  });

  test('user list respects the limit parameter', async ({ request }) => {
    const response = await request.get('/users', { params: { limit: 5 } });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.users).toHaveLength(5);
  });
});
