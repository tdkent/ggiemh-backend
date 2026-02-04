import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import app from '@/app.js';

vi.mock('../services/homes.services.ts', () => {
	return {
		getHomes: vi.fn(() => {
			return [{ id: 1 }];
		}),
		getHome: vi.fn(() => {
			return { id: 1 };
		}),
	};
});

describe('Health check', () => {
	it('GET / sends status code 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
	});
});

describe('Homes route', () => {
	it('GET /homes sends a list of objects with an id', async () => {
		return request(app)
			.get('/homes')
			.expect(200)
			.expect('Content-Type', /json/)
			.then((res) => {
				expect(res.body).toEqual([{ id: 1 }]);
			});
	});

	describe('GET /homes/:id', async () => {
		it('sends 404 error if id is not a number', async () => {
			return request(app).get('/homes/bad-route').expect(400);
		});

		it('sends 400 error if id is not a valid number', async () => {
			const res1 = await request(app).get('/homes/-1');
			expect(res1.status).toBe(400);

			const res2 = await request(app).get('/homes/13');
			expect(res2.status).toBe(400);

			const res3 = await request(app).get('/homes/31');
			expect(res3.status).toBe(400);
		});

		it('sends the correct home document for a valid id', async () => {
			return request(app)
				.get('/homes/1')
				.expect(200)
				.expect('Content-Type', /json/)
				.then((res) => {
					expect(res.body).toEqual({ id: 1 });
				});
		});
	});
});
