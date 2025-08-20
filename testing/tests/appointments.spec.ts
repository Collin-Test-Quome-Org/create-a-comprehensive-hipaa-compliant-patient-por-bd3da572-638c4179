// Playwright tests for Appointments page
import { test, expect } from '@playwright/test';

test.describe('Appointments Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/appointments');
  });

  test('displays heading and all appointment cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Appointments' })).toBeVisible();
    await expect(page.getByText('2024-07-10 at 2:00pm')).toBeVisible();
    await expect(page.getByText('2024-07-22 at 11:00am')).toBeVisible();
    await expect(page.getByText('2024-05-18 at 9:00am')).toBeVisible();
  });

  test('shows status and manage button for each appointment', async ({ page }) => {
    await expect(page.getByText('Confirmed')).toBeVisible();
    await expect(page.getByText('Pending')).toBeVisible();
    await expect(page.getByText('Completed')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Manage' }).first()).toBeVisible();
  });

  test('book new appointment button navigates to /appointments/new', async ({ page }) => {
    await page.click('#book-appointment-btn');
    await expect(page).toHaveURL(/\/appointments\/new/);
  });
});
