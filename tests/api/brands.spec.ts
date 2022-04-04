import { test, expect } from '@playwright/test';

test.describe.parallel('Brands list endpoint:', () => {
	test('API 3: Get All Brands List', async ({ request }) => {
		const responce = await request.get('/api/brandsList');
		expect(responce.status()).toBe(200);
	});

	test('API 4: PUT To All Brands List', async ({ request }) => {
		const responce = await request.put('/api/brandsList', {});
		expect(responce.status()).toBe(200);
		const actualBody = await responce.json();
		const expectedBody = {
			responseCode: 405,
			message: 'This request method is not supported.',
		};
		await expect(actualBody).toEqual(expectedBody);
	});
});
