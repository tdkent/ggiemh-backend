import type { NextFunction, Request, Response } from 'express';
import { logger } from '@/lib/loggers.js';

interface HttpError extends Error {
	statusCode: number;
}

export function routeNotFound(_req: Request, res: Response) {
	res.status(404).json('Resource not found');
}

export function defaultErrorHandler(
	error: HttpError,
	_req: Request,
	res: Response,
	next: NextFunction
) {
	logger.error('Error:', error);

	if (res.headersSent) {
		return next(error);
	}

	const status = error.statusCode || 500;

	res.status(status).json(error.message || 'Internal server error');
}
