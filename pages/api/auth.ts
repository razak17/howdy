import { NextApiRequest, NextApiResponse } from 'next';
import { client } from '../../lib/client';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
	const doc = req.body;

	client.createIfNotExists(doc).then(() => {
		res.status(200).json('Login successful');
	});
}
