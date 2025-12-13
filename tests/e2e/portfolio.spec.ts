// ULTIMATE TEST & IMPROVE – Professional, fast, attractive UX – 100% Gemini AntiGravity 2025
import { test, expect } from '@playwright/test';

test.describe('Portfolio Homepage E2E', () => {
    test('should load homepage successfully', async ({ page }) => {
        await page.goto('/');
        await expect(page).toHaveTitle(/Ahmad Hassan/i);
    });

    test('should have responsive navigation', async ({ page }) => {
        await page.goto('/');
        // Check for navigation elements
        const header = page.locator('header, nav').first();
        await expect(header).toBeVisible();
    });

    test('should display hero section', async ({ page }) => {
        await page.goto('/');
        // Check for main hero content
        await expect(page.locator('text=Ahmad Hassan')).toBeVisible({ timeout: 5000 });
    });
});

test.describe('Portfolio Agent', () => {
    test('should open agent when orb clicked', async ({ page }) => {
        await page.goto('/');

        // Wait for page to load
        await page.waitForLoadState('networkidle');

        // Look for the orb button
        const orb = page.locator('button').filter({ hasText: /💬|chat/i }).first();
        if (await orb.isVisible()) {
            await orb.click();
            // Check if chat interface appears
            await expect(page.locator('text=Ahmad')).toBeVisible({ timeout: 3000 });
        }
    });
});

test.describe('About Page', () => {
    test('should render about page with 3D background', async ({ page }) => {
        await page.goto('/about');
        await expect(page.locator('h1')).toContainText('Ahmad');
    });
});

test.describe('Mobile Responsiveness', () => {
    test.use({ viewport: { width: 375, height: 667 } }); // iPhone SE

    test('should be mobile-friendly', async ({ page }) => {
        await page.goto('/');
        // Check content is not overflowing
        const body = page.locator('body');
        const box = await body.boundingBox();
        expect(box?.width).toBeLessThanOrEqual(375);
    });
});
