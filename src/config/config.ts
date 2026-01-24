import 'dotenv/config';

interface Config {
	mongoCluster: string;
	mongoUser: string;
	mongoPassword: string;
	port: number;
}

const config: Config = {
	mongoCluster: process.env.MONGODB_CLUSTER!,
	mongoPassword: process.env.MONGODB_PASSWORD!,
	mongoUser: process.env.MONGODB_USERNAME!,
	port: Number(process.env.PORT!),
};

export default config;
