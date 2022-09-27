import type { NextPage } from 'next';
import { getTopic, getPosts } from '../lib/api';

const Home: NextPage = () => {
	return <div className='text-3xl font-bold underline'>Hello Mom!</div>;
};

export default Home;

export const getServerSideProps = async ({ query: { topic } }: { query: { topic: string } }) => {
	let res = getPosts();

	if (topic) {
		res = getTopic(topic);
	}

	return {
		props: { videos: res }
	};
};
