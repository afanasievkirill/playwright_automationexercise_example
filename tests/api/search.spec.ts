import { test, expect } from '@playwright/test';

test.describe.parallel('Search endpoint:', () => {
	const SEARCH_PARAM = 'top';

	test('API 5: POST To Search Product', async ({ request }) => {
		const responce = await request.post(`/api/searchProduct?search_product=${SEARCH_PARAM}`);
		expect(responce.status()).toBe(200);
	});

	test('API 6: POST To Search Product without search_product parameter', async ({ request }) => {
		const responce = await request.post('/api/searchProduct', {});
		expect(responce.status()).toBe(200);
		const actualBody = await responce.json();
		const expectedBody = {
			responseCode: 400,
			message: 'Bad request, search_product parameter is missing in POST request.',
		};
		await expect(actualBody).toEqual(expectedBody);
	});
});
