import { getDb } from '@/db/client.js';

export async function getHomes() {
	const db = getDb();
	const homes = await db
		.collection('homes')
		.find({}, { projection: { _id: 0 } })
		.toArray();
	return homes;
}
