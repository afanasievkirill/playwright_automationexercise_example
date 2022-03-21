import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Register user:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 1: Register User', async ({ page }) => {
		const firstName = await faker.name.findName();

		await page.click('i[class="fa fa-lock"]');
		await expect(page.locator('//*[contains(text(),"New User Signup!")]')).toBeVisible();

		await page.type('input[data-qa="signup-name"]', firstName);
		await page.type('input[data-qa="signup-email"]', faker.internet.email());
		await page.click('button[data-qa="signup-button"]');

		await expect(page.locator('//*[contains(text(),"Enter Account Information")]')).toBeVisible();

		await page.click('#id_gender1');
		await page.type('input[data-qa="password"]', '123456');
		await page.selectOption('select[data-qa="days"]', '1');
		await page.selectOption('select[data-qa="months"]', '2');
		await page.selectOption('select[data-qa="years"]', '1984');

		await page.check('#newsletter');
		await page.check('#optin');

		await page.type('input[data-qa="first_name"]', firstName);
		await page.type('input[data-qa="last_name"]', faker.name.lastName());
		await page.type('input[data-qa="company"]', faker.company.companyName());
		await page.type('input[data-qa="address"]', faker.address.streetAddress());
		await page.type('input[data-qa="address2"]', faker.address.streetAddress());
		await page.selectOption('select[data-qa="country"]', 'Canada');
		await page.type('input[data-qa="state"]', faker.address.state());
		await page.type('input[data-qa="city"]', faker.address.city());
		await page.type('input[data-qa="zipcode"]', faker.address.zipCode());
		await page.type('input[data-qa="mobile_number"]', faker.phone.phoneNumber());

		await page.click('button[data-qa="create-account"]');

		await expect(page.locator('h2[data-qa="account-created"] b')).toBeVisible();

		await page.click('a[data-qa="continue-button"]');

		// TODO Logged in expect

		await page.click('a[href="/delete_account"]');
		await page.click('button[class="btn btn-danger"]');
	});

	test('Test Case 5: Register User with existing email', async ({ page }) => {
		await page.click('i[class="fa fa-lock"]');
		await expect(page.locator('//*[contains(text(),"New User Signup!")]')).toBeVisible();

		await page.type('input[data-qa="signup-name"]', 'aphk');
		await page.type('input[data-qa="signup-email"]', 'aphk@test.com');
		await page.click('button[data-qa="signup-button"]');

		await expect(
			page.locator('//*[contains(text(),"Email Address already exist!")]'),
		).toBeVisible();
	});
});
