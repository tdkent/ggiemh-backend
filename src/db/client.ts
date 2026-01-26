import config from '@config/config.js';
import { type Db, MongoClient, ServerApiVersion } from 'mongodb';

const { mongoCluster, mongoDbName, mongoPassword, mongoUser } = config;
const uri = `mongodb+srv://${mongoUser}:${mongoPassword}@${mongoCluster}`;

// https://www.mongodb.com/docs/drivers/node/current/connect/mongoclient/#std-label-node-mongoclient
const mongoClient = new MongoClient(uri, {
	serverApi: {
		version: ServerApiVersion.v1,
		strict: true,
		deprecationErrors: true,
	},
});

let db: Db | undefined;

export async function connectMongoDb() {
	if (db) return db;
	await mongoClient.connect();
	db = mongoClient.db(mongoDbName);
	return db;
}

export function getDb() {
	if (!db) throw new Error('The database is not initialized.');
	return db;
}
