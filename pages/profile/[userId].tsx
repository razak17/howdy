import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { GoVerified } from 'react-icons/go';
import { IUser, Post } from '../../lib/types';
import VideoCard from '../../components/VideoCard';
import NoResults from '../../components/NoResults';
import { getUser } from '../../lib/api';

interface IProps {
	data: {
		user: IUser;
		userVideos: Post[];
		userLikedVideos: Post[];
	};
}

const Profile = ({ data }: IProps) => {
	const [showUserVideos, setShowUserVideos] = useState<Boolean>(true);
	const [videosList, setVideosList] = useState<Post[]>([]);

	const { user, userVideos, userLikedVideos } = data;
	const videos = showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';
	const liked = !showUserVideos ? 'border-b-2 border-black' : 'text-gray-400';

	useEffect(() => {
		const fetchVideos = async () => {
			if (showUserVideos) {
				setVideosList(userVideos);
			} else {
				setVideosList(userLikedVideos);
			}
		};

		fetchVideos();
	}, [showUserVideos, userLikedVideos, userVideos]);

	return (
		<div className='w-full'>
			<div className='flex gap-6 md:gap-10 mb-4 bg-white w-full'>
				<div className='w-16 h-16 md:w-32 md:h-32'>
					<Image
						width={120}
						height={120}
						layout='responsive'
						className='rounded-full'
						src={user.image}
						alt='user-profile'
					/>
				</div>

				<div>
					{/* eslint-disable-next-line max-len */}
					<div className='text-md md:text-2xl font-bold tracking-wider flex gap-2 items-center justify-center lowercase'>
						<span>{user.userName.replace(/\s+/g, '')} </span>
						<GoVerified className='text-blue-400 md:text-xl text-md' />
					</div>
					<p className='text-sm font-medium'> {user.userName}</p>
				</div>
			</div>
			<div>
				<div className='flex gap-10 mb-10 mt-10 border-b-2 border-gray-200 bg-white w-full'>
					<p
						className={`text-xl font-semibold cursor-pointer ${videos} mt-2`}
						onClick={() => setShowUserVideos(true)}
					>
						Videos
					</p>
					<p
						className={`text-xl font-semibold cursor-pointer ${liked} mt-2`}
						onClick={() => setShowUserVideos(false)}
					>
						Liked
					</p>
				</div>
				<div className='flex gap-6 flex-wrap md:justify-start'>
					{/* eslint-disable max-len */}
					{videosList.length ? (
						videosList.map((post: Post, idx: number) => <VideoCard key={idx} post={post} />)
					) : (
						<NoResults text={`No ${showUserVideos ? '' : 'Liked'} Videos Yet`} />
					)}
				</div>
			</div>
		</div>
	);
};

export default Profile;

export const getServerSideProps = async ({
	params: { userId }
}: {
	params: { userId: string };
}) => {
	const data = await getUser(userId);

	return {
		props: { data: data }
	};
};
