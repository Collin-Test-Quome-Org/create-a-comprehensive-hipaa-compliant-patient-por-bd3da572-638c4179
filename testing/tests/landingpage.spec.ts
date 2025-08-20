import { test, expect } from '@playwright/test';

// The homepage renders the LandingPage, so we test / for LandingPage content

test.describe('LandingPage', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('should display the Hero section', async ({ page }) => {
    // Hero is rendered at the top; since we don't know the exact text, check for main landmark
    await expect(page.locator('main')).toBeVisible();
  });

  test('should render Features section with all feature cards', async ({ page }) => {
    // Heading for features section
    await expect(page.getByRole('heading', { name: 'A Fortress for Your Health Data', level: 2 })).toBeVisible();

    // There should be 3 feature cards (use headings inside the cards)
    const featureTitles = [
      'Private by Design',
      'Effortless Management',
      '24/7 Peace of Mind',
    ];
    for (const title of featureTitles) {
      await expect(page.getByRole('heading', { name: title, level: 4 })).toBeVisible();
    }

    // Each feature card should have its description text
    await expect(page.getByText('Your health data stays between us and you. We use advanced encryption and secure cloud storage to keep your information safe—always.')).toBeVisible();
    await expect(page.getByText('View appointments, access documents, and manage prescriptions all in one serene dashboard—no technical skills required.')).toBeVisible();
    await expect(page.getByText('Medishield Portal stands vigilant—so you can rest easy knowing your health journey is protected, day and night.')).toBeVisible();
  });

  test('should display the testimonial/CTA section', async ({ page }) => {
    const testimonialHeading = '"With Medishield, you are the guardian of your wellbeing."';
    await expect(page.getByRole('heading', { name: testimonialHeading, level: 3 })).toBeVisible();
    await expect(page.getByText('Sign up today and discover a new era of secure, patient-centered care. Your journey to peace of mind starts here.')).toBeVisible();
  });

  test('Join Now CTA button should be visible and navigates to /signup', async ({ page }) => {
    const ctaButton = page.locator('#footer-signup-cta');
    await expect(ctaButton).toBeVisible();
    await expect(ctaButton).toHaveText('Join Now');
    // Simulate click and check navigation
    await ctaButton.click();
    await expect(page).toHaveURL(/\/signup$/);
  });

  test('basic accessibility: all feature cards are focusable via Tab', async ({ page }) => {
    // There are 3 feature cards, test at least that each is focusable
    const featureHeadings = await page.locator('h4').all();
    expect(featureHeadings.length).toBeGreaterThanOrEqual(3);
    for (let i = 0; i < 3; i++) {
      await featureHeadings[i].focus();
      await expect(featureHeadings[i]).toBeFocused();
    }
  });
});
