import config from '@config/config.js';
import app from '@/app.js';
import { connectMongoDb } from '@/db/client.js';
import { logger, startupLogger } from '@/lib/loggers.js';

async function startServer() {
	try {
		await connectMongoDb();
		app.listen(config.port, () => {
			startupLogger.info(`Server running on port ${config.port}`);
		});
	} catch (error) {
		logger.error(error);
		process.exit(1);
	}
}

startServer();
