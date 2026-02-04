import express from 'express';
import { getHomes } from '@/services/homes.services.js';

const router = express.Router();

router.get('/', async (_req, res) => {
	const homes = await getHomes();
	res.send(homes);
});

router.param('/:id', async (req, res, next, id) => {
	console.log(id);
	// validate id
	// fetch home
	// call getHome()
	// add home to req
	next();
});

router.get('/:id', async (req, res) => {
	res.send('hello world');
});

export default router;
