import { test, expect } from '@playwright/test';

test.describe('Products:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 8: Verify All Products and product detail page', async ({ page }) => {
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');
		await expect(page.locator('div[class="features_items"]')).toBeVisible();

		await page.locator('i[class="fa fa-plus-square"]').first().click();

		await expect(page.locator('div[class="product-information"] h2')).toBeVisible();
		await expect(page.locator('//*[contains(text(),"Category:")]')).toBeVisible();
		await expect(page.locator('div[class="product-information"] span span')).toBeVisible();
		await expect(page.locator('//*[contains(text(),"Availability:")]')).toBeVisible();
		await expect(page.locator('//*[contains(text(),"Condition:")]')).toBeVisible();
		await expect(page.locator('//*[contains(text(),"Brand:")]')).toBeVisible();
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
