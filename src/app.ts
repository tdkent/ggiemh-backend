import express from 'express';
import { defaultErrorHandler, routeNotFound } from './middleware/errors.middleware.js';

const app = express();

app.use(routeNotFound);
app.use(defaultErrorHandler);

export default app;
