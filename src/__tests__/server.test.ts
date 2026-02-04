import request from 'supertest';
import { describe, expect, it, vi } from 'vitest';
import app from '@/app.js';

vi.mock('../services/homes.services.ts', () => {
	return {
		getHomes: vi.fn(() => {
			return [{ id: 1 }];
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
		it('sends 400 error if id is not a number', async () => {});

		it('sends 400 error if id is not a valid number', async () => {});

		it('sends the correct home document for a valid id', async () => {});
	});
});
