import fs from 'fs/promises';
import path from 'path';
export async function load({ params }) {
	const filepath = path.resolve('src/lib/data/latest-jobs.txt');
	const rawData = await fs.readFile(filepath, 'utf-8');

	const postId = params.id;
	const data = JSON.parse(rawData);
	const posts = data.posts;
	const post = posts.find((q) => q.id === parseInt(postId));

	console.log(post);

	return { post };
	//console.log(params.title);
}
