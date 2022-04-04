import { test, expect } from '@playwright/test';

test.describe.parallel('Product list endpoint:', () => {
	test('API 1: Get All Products List', async ({ request }) => {
		const responce = await request.get('/api/productsList');
		expect(responce.status()).toBe(200);
		console.log(await responce.json());
	});

	test('API 2: POST To All Products List', async ({ request }) => {
		const responce = await request.post('/api/productsList', {});
		expect(responce.status()).toBe(200);
		const actualBody = await responce.json();
		const expectedBody = {
			responseCode: 405,
			message: 'This request method is not supported.',
		};
		await expect(actualBody).toEqual(expectedBody);
	});
});
