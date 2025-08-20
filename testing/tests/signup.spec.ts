// Playwright tests for Signup page
import { test, expect } from '@playwright/test';

test.describe('Signup Page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/signup');
  });

  test('renders signup form with all inputs and buttons', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByLabel('Confirm Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Create Account' })).toBeVisible();
    await expect(page.getByText('Sign in instead')).toBeVisible();
  });

  test('shows error if fields are empty', async ({ page }) => {
    await page.click('#signup-btn');
    await expect(page.getByText('Please fill out all fields.')).toBeVisible();
  });

  test('shows error if passwords do not match', async ({ page }) => {
    await page.fill('#signup-email', 'test@example.com');
    await page.fill('#signup-password', 'abc12345');
    await page.fill('#signup-confirm', 'different');
    await page.click('#signup-btn');
    await expect(page.getByText('Passwords do not match.')).toBeVisible();
  });

  test('navigates to dashboard on successful signup', async ({ page }) => {
    await page.fill('#signup-email', 'newuser@example.com');
    await page.fill('#signup-password', 'mypassword');
    await page.fill('#signup-confirm', 'mypassword');
    await page.click('#signup-btn');
    await expect(page.locator('h1', { hasText: 'Welcome to MyHealth Secure Portal' })).toBeVisible({ timeout: 2000 });
  });

  test('sign in instead link navigates to login', async ({ page }) => {
    await page.getByText('Sign in instead').click();
    await expect(page).toHaveURL(/.*login/);
  });
});
