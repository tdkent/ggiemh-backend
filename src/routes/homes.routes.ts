import express from 'express';
import { getHome, getHomes } from '@/services/homes.services.js';

const router = express.Router();

router.get('/', async (_req, res) => {
	const homes = await getHomes();
	res.send(homes);
});

router.param('id', async (req, res, next, id) => {
	const validId = Number(id);

	if (
		!validId ||
		validId < 1 ||
		validId > 30 ||
		validId === 13 ||
		validId === 22
	) {
		res.status(400).send('Invalid request');
	}

	const home = await getHome(validId);
	req.home = home;
	next();
});

router.get('/:id', (req, res) => {
	res.send(req.home);
});

export default router;
