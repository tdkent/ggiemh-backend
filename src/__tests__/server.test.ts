import request from 'supertest';
import { describe, expect, it } from 'vitest';
import app from '@/app.js';

describe('Health check', () => {
	it('GET / sends status code 200', async () => {
		const response = await request(app).get('/');
		expect(response.status).toBe(200);
	});
});
