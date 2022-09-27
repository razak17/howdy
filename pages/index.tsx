import { getTopic, getPosts } from '../lib/api';
import { Video } from '../lib/types';

const Home = ({ videos }: { videos: Video[] }) => {
	console.log({ videos });

	return (
		<div className='flex flex-col gap-10 videos h-full'>
			<h1>Hello Mom!</h1>
		</div>
	);
};

export default Home;

export const getServerSideProps = async ({ query: { topic } }: { query: { topic: string } }) => {
	let res = await getPosts();

	// if (topic) {
	// 	res = getTopic(topic);
	// }

	return {
		props: { videos: res }
	};
};
