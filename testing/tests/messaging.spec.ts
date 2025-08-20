// Playwright tests for Messaging page
import { test, expect } from '@playwright/test';

test.describe('Messaging Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/messages');
  });

  test('displays heading and message inbox', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Secure Messaging' })).toBeVisible();
    await expect(page.getByText('Message Inbox')).toBeVisible();
    await expect(page.getByText('Dr. Simmons')).toBeVisible();
    await expect(page.getByText('Please schedule your follow-up.')).toBeVisible();
    await expect(page.getByText('unread')).toBeVisible();
    await expect(page.getByText('Nurse Taylor')).toBeVisible();
    await expect(page.getByText('Your prescription refill has been approved.')).toBeVisible();
  });

  test('compose and send a message (shows sent animation)', async ({ page }) => {
    await page.fill('#compose-message-input', 'Hello care team!');
    await page.click('#send-message-btn');
    await expect(page.getByText('Message sent securely!')).toBeVisible({ timeout: 2000 });
  });

  test('send button is disabled if input is empty', async ({ page }) => {
    await page.fill('#compose-message-input', '  ');
    await expect(page.locator('#send-message-btn')).toBeDisabled();
  });
});
