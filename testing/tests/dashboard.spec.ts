// Playwright tests for Dashboard page
import { test, expect } from '@playwright/test';

test.describe('Dashboard Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/dashboard');
  });

  test('displays welcome heading', async ({ page }) => {
    await expect(page.getByRole('heading', { name: /Welcome to MyHealth Secure Portal/ })).toBeVisible();
  });

  test('shows next appointment card with details and button', async ({ page }) => {
    await expect(page.getByText('Next Appointment')).toBeVisible();
    await expect(page.getByText('2024-07-10 at 2:00pm')).toBeVisible();
    await expect(page.getByText('with Dr. Simmons')).toBeVisible();
    await expect(page.getByText('Confirmed')).toBeVisible();
    await expect(page.getByRole('button', { name: 'View Appointments' })).toBeVisible();
  });

  test('shows notifications card with notification list', async ({ page }) => {
    await expect(page.getByText('Notifications')).toBeVisible();
    await expect(page.getByText('Upcoming appointment with Dr. Simmons tomorrow at 2:00pm')).toBeVisible();
    await expect(page.getByText('Lab results available for your review')).toBeVisible();
    await expect(page.getByRole('button', { name: 'All Notifications' })).toBeVisible();
  });

  test('shows messages, prescriptions, and new documents cards', async ({ page }) => {
    await expect(page.getByText('Messages')).toBeVisible();
    await expect(page.getByText('2')).toBeVisible(); // unread messages
    await expect(page.getByRole('button', { name: 'Inbox' })).toBeVisible();
    await expect(page.getByText('Prescriptions')).toBeVisible();
    await expect(page.getByText('3')).toBeVisible(); // active prescriptions
    await expect(page.getByRole('button', { name: 'View' })).toBeVisible();
    await expect(page.getByText('New Documents')).toBeVisible();
    await expect(page.getByText('1')).toBeVisible(); // new docs
    await expect(page.getByRole('button', { name: 'Records' })).toBeVisible();
  });

  test('navigates to subpages via dashboard buttons', async ({ page }) => {
    await page.click('#view-appointments-btn');
    await expect(page).toHaveURL(/.*appointments/);
    await page.goto('/dashboard');
    await page.click('#view-notifications-btn');
    await expect(page).toHaveURL(/.*notifications/);
    await page.goto('/dashboard');
    await page.click('#dashboard-messages-btn');
    await expect(page).toHaveURL(/.*messages/);
    await page.goto('/dashboard');
    await page.click('#dashboard-prescriptions-btn');
    await expect(page).toHaveURL(/.*prescriptions/);
    await page.goto('/dashboard');
    await page.click('#dashboard-medical-records-btn');
    await expect(page).toHaveURL(/.*medical-records/);
  });
});
