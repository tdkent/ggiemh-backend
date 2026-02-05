export default function checkValidId(homeId: string | undefined) {
	const numId = Number(homeId);
	if (!numId || numId < 1 || numId > 30 || numId === 13 || numId === 22)
		return null;

	return numId;
}
