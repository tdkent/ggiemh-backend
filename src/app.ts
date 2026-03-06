import './instrument.js';
import config from '@config/config.js';
import {
	defaultErrorHandler,
	routeNotFound,
} from '@middleware/errors.middleware.js';
import logRequest from '@middleware/logs.middleware.js';
import homesRouter from '@routes/homes.routes.js';
import * as Sentry from '@sentry/node';
import cors from 'cors';
import express from 'express';
import helmet from 'helmet';

const app = express();

app.use(
	cors({
		methods: 'GET',
		origin: config.frontendUrl,
	})
);

app.use(helmet());

app.use(logRequest);

app.get('/', (_req, res) => {
	res.sendStatus(200);
});

app.use('/homes', homesRouter);

Sentry.setupExpressErrorHandler(app);

app.use(routeNotFound);
app.use(defaultErrorHandler);

export default app;
