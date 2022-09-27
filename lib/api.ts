import axios from 'axios';

export const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

export const getPosts = async () => {
	const res = await axios.get(`${baseUrl}/api/post`);
	return res.data;
};

export const getTopic = async (topic: string) => {
	const res = await axios.get(`${baseUrl}/api/discover/${topic}`);
	return res.data;
};
