import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../lib/client';
import { singleUserQuery, userCreatedPostsQuery, userLikedPostsQuery } from '../../../lib/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { id } = req.query;

		const query = singleUserQuery(id as string);
		const userVideosQuery = userCreatedPostsQuery(id as string);
		const userLikedVideosQuery = userLikedPostsQuery(id as string);

		const user = await client.fetch(query);
		const userVideos = await client.fetch(userVideosQuery);
		const userLikedVideos = await client.fetch(userLikedVideosQuery);

		const data = { user: user[0], userVideos, userLikedVideos };

		res.status(200).json(data);
	}
}
