import config from '@config/config.js';
import * as Sentry from '@sentry/node';

Sentry.init({
	dsn: config.sentryDSN,
	sendDefaultPii: false,
});
