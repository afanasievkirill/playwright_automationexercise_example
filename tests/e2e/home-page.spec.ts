import { test, expect } from '@playwright/test';

test('Test Case 2: Login User with correct email and password', async ({ page }) => {
	await page.goto('https://www.automationexercise.com/');
	await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
});
