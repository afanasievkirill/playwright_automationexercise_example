import { test, expect } from '@playwright/test';

test.describe('Cart:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 12: Add Products in Cart', async ({ page }) => {
		const firstProductId = 1;
		const secondProductId = 2;
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');

		await page.locator(`a[data-product-id="${firstProductId}"]`).first().click();
		await page.click('//*[contains(text(),"Continue Shopping")]');
		await page.locator(`a[data-product-id="${secondProductId}"]`).first().click();
		await page.click('//*[contains(text(),"Continue Shopping")]');

		await page.click('//*[contains(text()," Cart")]');
		await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');

		await expect(page.locator(`#product-${firstProductId}`)).toBeVisible();
		await expect(page.locator(`#product-${secondProductId}`)).toBeVisible();
	});
});
