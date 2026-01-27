import config from '@config/config.js';
import winston from 'winston';

const { combine, errors, json, prettyPrint, timestamp } = winston.format;

export const logger = winston.createLogger({
	level: config.nodeEnv === 'dev' ? 'info' : 'error',
	format: combine(
		errors({ trace: true }),
		timestamp({ format: 'YYYY-MM-DD HH:mm:ss:ms' }),
		json(),
		prettyPrint()
	),
	transports: [new winston.transports.Console()],
});

export const startupLogger = winston.createLogger({
	level: 'info',
	format: winston.format.cli(),
	transports: [new winston.transports.Console()],
});
