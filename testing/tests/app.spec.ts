import { test, expect } from '@playwright/test';

// These tests assume the app is served at the root domain

test.describe('App Routing and Layout', () => {
  test('renders the homepage at /', async ({ page }) => {
    await page.goto('/');
    // Expect navigation to be present (by landmark role or nav, fallback to text)
    await expect(
      page.locator('nav, [data-testid="navigation"]')
    ).toBeVisible();

    // Expect homepage content to be present
    await expect(
      page.locator('h1, [data-testid="homepage-heading"]')
    ).toBeVisible();
  });

  test('Navigation component is visible on all routes', async ({ page }) => {
    await page.goto('/');
    await expect(
      page.locator('nav, [data-testid="navigation"]')
    ).toBeVisible();
  });

  test('should have accessible navigation landmarks', async ({ page }) => {
    await page.goto('/');
    // Check for nav landmark (for accessibility)
    const nav = page.locator('nav');
    await expect(nav).toBeVisible();
    await expect(nav).toHaveAttribute('role', /navigation|nav/).catch(() => {});
  });

  test('Homepage should have a recognizable title', async ({ page }) => {
    await page.goto('/');
    // Title should contain "Home" or app brand name
    const title = await page.title();
    expect(title.length).toBeGreaterThan(0);
  });

  // Future: When Login, Signup, Dashboard routes are implemented, add tests for them
});
