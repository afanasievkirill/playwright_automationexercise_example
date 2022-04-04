import { test, expect } from '@playwright/test';

test.describe('Cart:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	// TODO Запилить валидацию с помощью получения данных по продукту через Апи.
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

	test('Test Case 13: Verify Product quantity in Cart', async ({ page }) => {
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');

		await page.locator('i[class="fa fa-plus-square"]').first().click();
		await expect(page).toHaveURL('https://www.automationexercise.com/product_details/1');

		await page.fill('#quantity', '4');
		await page.click('button[class="btn btn-default cart"]');

		await page.click('//*[contains(text(),"View Cart")]');
		await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');

		await expect(page.locator(`#product-1 .cart_quantity button`)).toHaveText('4');
	});

	test('Test Case 17: Remove Products From Cart', async ({ page }) => {
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');

		await page.locator(`a[data-product-id="1"]`).first().click();
		await page.click('//*[contains(text(),"View Cart")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');

		await page.click('#product-1 .cart_delete a');
		//await expect(page.locator(`#product-1 .cart_quantity button`)).toHaveText('4');
		await expect(page.locator('//*[contains(text(),"Cart is empty!")]')).toBeVisible();
	});

	test('Test Case 22: Add to cart from Recommended items', async ({ page }) => {
		await expect(page.locator('div.recommended_items h2[class="title text-center"]')).toBeVisible();
		await page
			.locator('div.recommended_items a[class="btn btn-default add-to-cart"]')
			.first()
			.click();
		await page.click('//*[contains(text(),"View Cart")]');
		await expect(page.locator('tr[id*=product]')).toBeVisible();
	});
});
