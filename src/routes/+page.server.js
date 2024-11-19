// import fs from 'fs/promises';
// import path from 'path';

// export async function load() {
// 	try {
// 		const filePath = path.resolve('src/lib/data/post.txt');
// 		console.log('Resolved file path:', filePath);

// 		const rawData = await fs.readFile(filePath, 'utf-8');
// 		console.log('Raw file content:', rawData); // Log the file content

// 		const data = JSON.parse(rawData);
// 		return {
// 			posts: data.posts
// 		};
// 	} catch (error) {
// 		console.error('Error:', error.message);
// 		return {
// 			posts: [],
// 			error: 'Failed to load posts. Please check the data file.'
// 		};
// 	}
// }
