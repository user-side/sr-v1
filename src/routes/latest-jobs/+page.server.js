import fs from 'fs/promises';
import path from 'path';

export async function load() {
	const filepath = path.resolve('src/lib/data/latest-jobs.txt');
	const rawData = await fs.readFile(filepath, 'utf-8');
	const postData = JSON.parse(rawData);
	return { postData };
}
