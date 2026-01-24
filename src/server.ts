import express from 'express';
import config from './config/config.js';
import { defaultErrorHandler, routeNotFound } from './middleware/errors.middleware.js';

const app = express();

app.use(routeNotFound);
app.use(defaultErrorHandler);

app.listen(config.port, () => {
	console.log(`Server running on port ${config.port}`);
});
