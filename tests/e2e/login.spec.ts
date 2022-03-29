import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Login user:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	// TODO Зарегистрировать уникального юзера через АПИ
	test('Test Case 2: Login User with correct email and password', async ({ page }) => {
		await page.click('i[class="fa fa-lock"]');
		await expect(page.locator('//*[contains(text(),"New User Signup!")]')).toBeVisible();

		await page.type('input[data-qa="login-email"]', 'aphk@test.com');
		await page.type('input[data-qa="login-password"]', '12345678');
		await page.click('button[data-qa="login-button"]');

		const loggedLocator = page.locator('//*[contains(text()," Logged in as ")]');
		expect(loggedLocator).toBeVisible();
		expect(loggedLocator).toContainText('aphk');

		await page.click('//*[contains(text()," Logout")]');
	});

	test('Test Case 3: Login User with incorrect email and password', async ({ page }) => {
		await page.click('i[class="fa fa-lock"]');
		await expect(page.locator('//*[contains(text(),"New User Signup!")]')).toBeVisible();

		await page.type('input[data-qa="login-email"]', faker.internet.email());
		await page.type('input[data-qa="login-password"]', faker.internet.password());
		await page.click('button[data-qa="login-button"]');

		await expect(
			page.locator('//*[contains(text(),"Your email or password is incorrect!")]'),
		).toBeVisible();
	});

	test('Test Case 4: Logout User', async ({ page }) => {
		await page.click('i[class="fa fa-lock"]');
		await expect(page.locator('//*[contains(text(),"New User Signup!")]')).toBeVisible();

		await page.type('input[data-qa="login-email"]', 'aphk@test.com');
		await page.type('input[data-qa="login-password"]', '12345678');
		await page.click('button[data-qa="login-button"]');

		const loggedLocator = page.locator('//*[contains(text()," Logged in as ")]');
		expect(loggedLocator).toBeVisible();
		expect(loggedLocator).toContainText('aphk');

		await page.click('//*[contains(text()," Logout")]');

		await expect(page).toHaveURL('https://www.automationexercise.com/login');
	});
});
