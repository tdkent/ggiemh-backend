import express from 'express';
import { getHomes } from '@/services/homes.services.js';

const homesRouter = express.Router();

homesRouter.get('/', async (_req, res) => {
	const homes = await getHomes();
	res.send(homes);
});

export default homesRouter;
