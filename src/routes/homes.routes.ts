import express from 'express';
import createHttpError from 'http-errors';
import checkValidId from '@/helpers/validate.js';
import { getHome, getHomes } from '@/services/homes.services.js';

const router = express.Router();

router.get('/', async (_req, res) => {
	const homes = await getHomes();
	res.send(homes);
});

router.get('/:id', async (req, res, next) => {
	const { id } = req.params;
	const validId = checkValidId(id as string);

	if (!validId) {
		return next(createHttpError(400, 'Invalid request'));
	}

	const home = await getHome(validId);
	res.send(home);
});

export default router;
