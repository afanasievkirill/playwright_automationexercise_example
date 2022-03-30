import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

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

	test('Test Case 21: Add review on product', async ({ page }) => {
		await page.click('//*[contains(text()," Products")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/products');
		await expect(page.locator('div[class="features_items"]')).toBeVisible();

		await page.locator('i[class="fa fa-plus-square"]').first().click();

		await page.type('#name', faker.name.findName());
		await page.type('#email', faker.internet.email());
		await page.type('#review', faker.lorem.paragraph());
		await page.click('#button-review');

		await expect(page.locator('//*[contains(text(),"Thank you for your review.")]')).toBeVisible();
	});
});
