import 'dotenv/config';

interface Config {
	mongoCluster: string;
	mongoDbName: string;
	mongoUser: string;
	mongoPassword: string;
	nodeEnv: 'dev';
	port: number;
}

const config: Config = {
	mongoCluster: process.env.MONGODB_CLUSTER as string,
	mongoDbName: process.env.MONGODB_DB_NAME as string,
	mongoPassword: process.env.MONGODB_PASSWORD as string,
	mongoUser: process.env.MONGODB_USERNAME as string,
	nodeEnv: process.env.NODE_ENV as 'dev',
	port: Number(process.env.PORT),
};

export default config;
