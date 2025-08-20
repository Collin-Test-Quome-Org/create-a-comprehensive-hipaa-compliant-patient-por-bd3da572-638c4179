// Playwright tests for Medical Records page
import { test, expect } from '@playwright/test';

test.describe('Medical Records Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/medical-records');
  });

  test('displays heading and all medical record cards', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Medical Records' })).toBeVisible();
    await expect(page.getByText('Lab Results - Hemoglobin A1C')).toBeVisible();
    await expect(page.getByText('MRI Report - Left Knee')).toBeVisible();
    await expect(page.getByText('Visit Summary')).toBeVisible();
  });

  test('shows date, provider, type, and encrypted label for each record', async ({ page }) => {
    await expect(page.getByText('2024-07-01')).toBeVisible();
    await expect(page.getByText('Dr. Simmons • Lab Result')).toBeVisible();
    await expect(page.getByText('Encrypted & HIPAA Secure')).toBeVisible();
  });

  test('download buttons exist for each record', async ({ page }) => {
    await expect(page.locator('#download-record-1')).toBeVisible();
    await expect(page.locator('#download-record-2')).toBeVisible();
    await expect(page.locator('#download-record-3')).toBeVisible();
  });

  test('upload new document button navigates to file upload', async ({ page }) => {
    await page.click('#upload-record-btn');
    await expect(page).toHaveURL(/\/file-upload/);
  });
});
