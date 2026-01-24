import type { NextFunction, Request, Response } from 'express';

export function routeNotFound(_req: Request, res: Response) {
	res.status(404).send('Resource not found');
}

export function defaultErrorHandler(
	error: Error,
	_req: Request,
	res: Response,
	_next: NextFunction
) {
	console.error(error);
	res.status(500).send('Internal server error');
}
