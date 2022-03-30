import { test, expect } from '@playwright/test';

test.describe('Brand:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 19: View & Cart Brand Products', async ({ page }) => {
		const poloId = 'Polo';
		const allenId = 'Allen Solly Junior';

		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');

		await expect(page.locator('div.left-sidebar div.brands_products')).toBeVisible();

		await page.click(`a[href="/brand_products/${poloId}"]`);

		await expect(page.locator('h2[class="title text-center"]')).toContainText(
			'Brand - Polo Products',
		);

		await page.click(`a[href="/brand_products/${allenId}"]`);

		await expect(page.locator('h2[class="title text-center"]')).toContainText(
			'Brand - Allen Solly Junior Products',
		);
	});
});
