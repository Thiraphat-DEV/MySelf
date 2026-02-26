import { test, expect } from '@playwright/test';

test.describe('About page', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/about');
  });

  test('should show About section heading', async ({ page }) => {
    await expect(page.getByText('About', { exact: true }).first()).toBeVisible();
    await expect(page.getByRole('heading', { name: 'Who I am' })).toBeVisible();
  });

  test('should show profile image', async ({ page }) => {
    await expect(page.getByRole('img', { name: 'Thiraphat' })).toBeVisible();
  });

  test('should show name and intro text', async ({ page }) => {
    await expect(page.getByRole('heading', { name: 'Thiraphat Chorakhe' })).toBeVisible();
    await expect(page.getByText(/passionate developer based in Thailand/)).toBeVisible();
  });

  test('should be reachable from home via nav', async ({ page }) => {
    await page.goto('/');
    await page.getByRole('link', { name: /about/i }).first().click();
    await expect(page).toHaveURL(/\/about/);
    await expect(page.getByRole('heading', { name: 'Who I am' })).toBeVisible();
  });
});
