import { test, expect } from '@playwright/test';

test.describe('Search:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 9: Search Product', async ({ page }) => {
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');

		await page.type('input#search_product', 'Polo');
		await page.click('button#submit_search');

		await expect(page.locator('//*[contains(text(),"Searched Products")]')).toBeVisible();
		await expect(page.locator('div[class="productinfo text-center"] p')).toHaveText(
			'Premium Polo T-Shirts',
		);
	});
});
