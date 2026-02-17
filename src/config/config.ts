import 'dotenv/config';

interface Config {
	frontendUrl: string;
	mongoCluster: string;
	mongoDbName: string;
	mongoUser: string;
	mongoPassword: string;
	nodeEnv: 'production' | undefined;
	port: number;
}

const frontendUrl =
	process.env.NODE_ENV === 'development'
		? 'http://localhost:5173'
		: (process.env.FRONTEND_URL as string);

const config: Config = {
	frontendUrl,
	mongoCluster: process.env.MONGODB_CLUSTER as string,
	mongoDbName: process.env.MONGODB_DB_NAME as string,
	mongoPassword: process.env.MONGODB_PASSWORD as string,
	mongoUser: process.env.MONGODB_USERNAME as string,
	nodeEnv: process.env.NODE_ENV as 'production' | undefined,
	port: Number(process.env.PORT),
};

export default config;
