import { test, expect } from '@playwright/test';

test.describe('Category:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 18: View Category Products', async ({ page }) => {
		const dressId = 1;
		const tshirtsId = 3;

		await expect(page.locator('div.left-sidebar div#accordian')).toBeVisible();

		await page.click('a[href="#Women"]');
		await page.click(`a[href="/category_products/${dressId}"]`);

		await expect(page.locator('h2[class="title text-center"]')).toContainText(
			'Women - Dress Products',
		);

		await page.click('a[href="#Men"]');
		await page.click(`a[href="/category_products/${tshirtsId}"]`);

		await expect(page.locator('h2[class="title text-center"]')).toContainText(
			'Men - Tshirts Products',
		);
	});
});
