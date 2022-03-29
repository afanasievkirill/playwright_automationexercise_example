import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Subscribe:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 10: Verify Subscription in home page', async ({ page }) => {
		await page.locator('#susbscribe_email').click();
		await page.type('#susbscribe_email', faker.internet.email());
		await page.locator('#subscribe').click();

		await expect(
			page.locator('//*[contains(text(),"You have been successfully subscribed!")]'),
		).toBeVisible();
	});

	test('Test Case 11: Verify Subscription in Cart page', async ({ page }) => {
		await page.click('//*[contains(text()," Cart")]');
		await expect(page).toHaveURL('https://www.automationexercise.com/view_cart');

		await page.locator('#susbscribe_email').click();
		await page.type('#susbscribe_email', faker.internet.email());
		await page.locator('#subscribe').click();

		await expect(
			page.locator('//*[contains(text(),"You have been successfully subscribed!")]'),
		).toBeVisible();
	});
});
