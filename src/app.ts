import config from '@config/config.js';
import { defaultErrorHandler, routeNotFound } from '@middleware/errors.middleware.js';
import logRequest from '@middleware/logs.middleware.js';
import homesRouter from '@routes/homes.routes.js';
import cors from 'cors';
import express from 'express';

const app = express();

app.use(
	cors({
		methods: 'GET',
		origin: config.frontendUrl,
	})
);

app.use(logRequest);

app.get('/', (_req, res) => {
	res.sendStatus(200);
});

app.use('/homes', homesRouter);

app.use(routeNotFound);
app.use(defaultErrorHandler);

export default app;
