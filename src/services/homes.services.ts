import { getDb } from '@/db/client.js';

export async function getHomes() {
	const db = getDb();
	const homes = await db
		.collection('homes')
		.find({}, { projection: { _id: 0 } })
		.toArray();
	return homes;
}

export async function getHome(id: number) {
	const db = getDb();
	const home = await db
		.collection('homes')
		.findOne({ id }, { projection: { _id: 0 } });
	return home;
}
