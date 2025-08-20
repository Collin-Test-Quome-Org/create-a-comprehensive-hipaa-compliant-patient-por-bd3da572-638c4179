// Playwright tests for Login page
import { test, expect } from '@playwright/test';

test.describe('Login Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/login');
  });

  test('renders login form with all inputs and buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Secure Login' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByText('Forgot password?')).toBeVisible();
    await expect(page.getByText('Create account')).toBeVisible();
  });

  test('shows error if fields are empty', async ({ page }) => {
    await page.click('#login-btn');
    await expect(page.getByText('Please provide both email and password.')).toBeVisible();
  });

  test('navigates to dashboard on successful login', async ({ page }) => {
    await page.fill('#login-email', 'user@example.com');
    await page.fill('#login-password', 'password123');
    await page.click('#login-btn');
    // The dashboard should load after mock login
    await expect(page.locator('h1', { hasText: 'Welcome to MyHealth Secure Portal' })).toBeVisible({ timeout: 2000 });
  });

  test('forgot password and create account links navigate correctly', async ({ page }) => {
    await page.getByText('Forgot password?').click();
    await expect(page).toHaveURL(/.*forgot-password/);
    await page.goBack();
    await page.getByText('Create account').click();
    await expect(page).toHaveURL(/.*signup/);
  });
});
