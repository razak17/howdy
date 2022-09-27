import NoResults from '../components/NoResults';
import VideoCard from '../components/VideoCard';
import { getTopic, getPosts } from '../lib/api';
import { Post } from '../lib/types';

const Home = ({ posts }: { posts: Post[] }) => {
	// console.log({ posts });

	return (
		<div className='flex flex-col gap-10 videos h-full'>
			{posts.length ? (
				posts?.map((post: Post) => <VideoCard post={post} isShowingOnHome key={post._id} />)
			) : (
				<NoResults text={`No Videos`} />
			)}
		</div>
	);
};

export default Home;

export const getServerSideProps = async ({ query: { topic } }: { query: { topic: string } }) => {
	let data = await getPosts();

	// if (topic) {
	// 	data = getTopic(topic);
	// }

	return {
		props: { posts: data }
	};
};
