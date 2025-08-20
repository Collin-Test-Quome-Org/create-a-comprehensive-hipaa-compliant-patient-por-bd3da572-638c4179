// Playwright tests for File Upload page
import { test, expect } from '@playwright/test';
import path from 'path';

test.describe('File Upload Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/file-upload');
  });

  test('renders upload form and instructions', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Upload Medical Document' })).toBeVisible();
    await expect(page.getByText('Secure File Upload')).toBeVisible();
    await expect(page.getByLabel('')).toHaveAttribute('type', 'file'); // file input
    await expect(page.getByRole('button', { name: 'Select File' })).toBeVisible();
  });

  test('shows file name after selecting a file', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../fixtures/dummy.pdf');
    await page.setInputFiles('#file-upload-input', filePath);
    await expect(page.getByText('dummy.pdf')).toBeVisible();
  });

  test('shows upload complete message after file upload', async ({ page }) => {
    const filePath = path.resolve(__dirname, '../fixtures/dummy.pdf');
    await page.setInputFiles('#file-upload-input', filePath);
    await expect(page.getByText('dummy.pdf')).toBeVisible();
    // Wait for upload complete animation/message
    await expect(page.getByText('Upload complete!')).toBeVisible({ timeout: 2000 });
  });
});
