// Playwright tests for Prescriptions page
import { test, expect } from '@playwright/test';

test.describe('Prescriptions Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/prescriptions');
  });

  test('displays heading and all prescription cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Prescriptions' })).toBeVisible();
    await expect(page.getByText('Metformin 500mg')).toBeVisible();
    await expect(page.getByText('Lisinopril 10mg')).toBeVisible();
  });

  test('shows provider, status, last filled, and refill button', async ({ page }) => {
    await expect(page.getByText('Prescribed by Dr. Simmons')).toBeVisible();
    await expect(page.getByText('Last filled: 2024-06-20')).toBeVisible();
    await expect(page.getByText('Active')).toBeVisible();
    await expect(page.getByText('Pending Approval')).toBeVisible();
    await expect(page.locator('#refill-rx-1')).toBeVisible();
    await expect(page.locator('#refill-rx-2')).toBeVisible();
  });
});
