import { test, expect } from '@playwright/test';

test.describe('Login API', { tag: ['@api', '@smoke'] }, () => {
  test('login returns an access token', async ({ request }) => {
    const response = await request.post('/auth/login', {
      data: { username: 'emilys', password: 'emilyspass' },
    });

    expect(response.status()).toBe(200);
    const body = await response.json();
    expect(body.username).toBe('emilys');
    expect(body.accessToken).toBeTruthy();
  });

  test('login with wrong password is rejected', async ({ request }) => {
    const response = await request.post('/auth/login', {
      data: { username: 'emilys', password: 'wrong' },
    });

    expect(response.status()).toBe(400);
  });
});
