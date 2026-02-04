import 'dotenv/config';

interface Config {
	frontendUrl: string;
	mongoCluster: string;
	mongoDbName: string;
	mongoUser: string;
	mongoPassword: string;
	nodeEnv: 'dev';
	port: number;
}

const config: Config = {
	frontendUrl: process.env.FRONTEND_URL as string,
	mongoCluster: process.env.MONGODB_CLUSTER as string,
	mongoDbName: process.env.MONGODB_DB_NAME as string,
	mongoPassword: process.env.MONGODB_PASSWORD as string,
	mongoUser: process.env.MONGODB_USERNAME as string,
	nodeEnv: process.env.NODE_ENV as 'dev',
	port: Number(process.env.PORT),
};

export default config;
