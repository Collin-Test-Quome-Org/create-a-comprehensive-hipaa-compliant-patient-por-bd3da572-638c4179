// Playwright tests for Notifications page
import { test, expect } from '@playwright/test';

test.describe('Notifications Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/notifications');
  });

  test('displays heading and all notifications', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Notifications' })).toBeVisible();
    await expect(page.getByText('Appointment Confirmed')).toBeVisible();
    await expect(page.getByText('Lab Results Available')).toBeVisible();
    await expect(page.getByText('Prescription Refill Approved')).toBeVisible();
  });

  test('shows notification messages and times', async ({ page }) => {
    await expect(page.getByText('Your appointment with Dr. Simmons is confirmed for 2024-07-10 at 2:00pm.')).toBeVisible();
    await expect(page.getByText('New lab results are ready to view in your Medical Records.')).toBeVisible();
    await expect(page.getByText('Your refill for Metformin 500mg has been approved.')).toBeVisible();
    await expect(page.getByText('Today, 8:00am')).toBeVisible();
    await expect(page.getByText('Yesterday, 2:30pm')).toBeVisible();
    await expect(page.getByText('2 days ago')).toBeVisible();
  });
});
