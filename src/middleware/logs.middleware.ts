import type { NextFunction, Request, Response } from 'express';
import { logger } from '@/lib/loggers.js';

export default function logRequest(
	req: Request,
	res: Response,
	next: NextFunction
) {
	const now = Date.now();
	res.on('finish', () => {
		const httpLogger = logger.child({
			method: req.method,
			path: req.path,
			status: res.statusCode,
			durationMs: Date.now() - now,
		});
		const message = 'New Request';
		if (res.statusCode >= 400) httpLogger.error(message);
		else httpLogger.info(message);
	});
	next();
}
