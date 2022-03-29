import { test, expect } from '@playwright/test';
import { faker } from '@faker-js/faker';

test.describe('Contact us:', () => {
	test.beforeEach(async ({ page }) => {
		await page.goto('https://www.automationexercise.com/');
		await expect(page.locator('img[alt="Website for automation practice"]')).toBeVisible();
	});

	test('Test Case 6: Contact Us Form', async ({ page }) => {
		await page.click('//*[contains(text()," Contact us")]');
		await page.type('input[data-qa="name"]', faker.name.findName());
		await page.type('input[data-qa="email"]', faker.internet.email());
		await page.type('input[data-qa="subject"]', faker.lorem.sentence());
		await page.type('input[data-qa="subject"]', faker.lorem.paragraph());

		await page.setInputFiles('input[name="upload_file"]', './config/contact-us.json');

		await page.on('dialog', (dialog) => dialog.accept());
		await page.click('input[data-qa="submit-button"]');

		//'//*[contains(text(),"Success! Your details have been submitted successfully.")]'
		await expect(page.locator('div[class="status alert alert-success"]')).toBeVisible();

		await page.click('i[class="fa fa-angle-double-left"]');
	});
});
