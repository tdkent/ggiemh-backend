import { defaultErrorHandler, routeNotFound } from '@middleware/errors.middleware.js';
import express from 'express';

const app = express();

app.use(routeNotFound);
app.use(defaultErrorHandler);

export default app;
