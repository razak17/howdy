import type { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../../lib/client';

import { postDetailQuery } from '../../../lib/queries';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	if (req.method === 'GET') {
		const { id } = req.query;
		const query = postDetailQuery(id as string);

		const data = await client.fetch(query);

		res.status(200).json(data[0]);
	}
}
