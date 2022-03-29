import { test, expect } from '@playwright/test';

test.describe('Test case:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 7: Verify Test Cases Page', async ({ page }) => {
		await page.click('//*[contains(text()," Test Cases")]');
		await expect(page).toHaveURL('https://www.automationexercise.com/test_cases');
	});
});
