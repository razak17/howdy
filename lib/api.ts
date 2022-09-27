import axios from 'axios';
import { BASE_URL } from './constants';

export const getPosts = async () => {
	const res = await axios.get(`${BASE_URL}/api/post`);
	return res.data;
};

export const getPost = async (id: string) => {
	const res = await axios.get(`${BASE_URL}/api/post/${id}`);
	return res.data;
};

export const getTopic = async (topic: string) => {
	const res = await axios.get(`${BASE_URL}/api/discover/${topic}`);
	return res.data;
};

export const createPost = async (doc: any) => {
	const res = await axios.post(`${BASE_URL}/api/post`, doc);
	return res.data;
};

export const getAllUsers = async () => {
	const res = await axios.get(`${BASE_URL}/api/users`);
	return res.data;
};

export const likePost = async (payload: any) => {
	const res = await axios.put(`${BASE_URL}/api/like`, payload);
	return res.data;
};

export const createOrGetUser = async (response: any, addUser: any) => {
	var base64Url = response.credential.split('.')[1];
	var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
	var jsonPayload = decodeURIComponent(
		window
			.atob(base64)
			.split('')
			.map(function (c) {
				return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
			})
			.join('')
	);

	const { name, picture, sub } = JSON.parse(jsonPayload);

	const user = {
		_id: sub,
		_type: 'user',
		userName: name,
		image: picture
	};

	addUser(user);

	await axios.post(`${BASE_URL}/api/auth`, user);
};
