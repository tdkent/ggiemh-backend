import { defaultErrorHandler, routeNotFound } from '@middleware/errors.middleware.js';
import homesRouter from '@routes/homes.routes.js';
import express from 'express';

const app = express();

app.get('/', (_req, res) => {
	res.sendStatus(200);
});

app.use('/homes', homesRouter);

app.use(routeNotFound);
app.use(defaultErrorHandler);

export default app;
