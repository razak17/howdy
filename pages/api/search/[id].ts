import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../lib/client';
import { searchPostsQuery } from '../../../lib/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { id } = req.query;

		const videosQuery = searchPostsQuery(id as string);

		const videos = await client.fetch(videosQuery);

		res.status(200).json(videos);
	}
}
