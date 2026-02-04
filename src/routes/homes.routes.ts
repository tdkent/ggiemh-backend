import type { Request } from 'express';
import express from 'express';
import type { Document, WithId } from 'mongodb';
import checkValidId from '@/helpers/validate.js';
import { getHome, getHomes } from '@/services/homes.services.js';

const router = express.Router();

interface TypedRequest extends Request {
	home?: WithId<Document> | null;
}

router.get('/', async (_req, res) => {
	const homes = await getHomes();
	res.send(homes);
});

router.param('id', async (req: TypedRequest, res, next, id) => {
	const validId = checkValidId(id);

	if (!validId) {
		res.status(400).send('Invalid request');
		return;
	}

	const home = await getHome(validId);
	req.home = home;
	next();
});

router.get('/:id', (req: TypedRequest, res) => {
	res.send(req.home);
});

export default router;
