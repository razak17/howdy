import { BiCommentX } from 'react-icons/bi';
import { MdOutlineVideocamOff } from 'react-icons/md';

const NoResults = ({ text }: { text: string }) => {
	return (
		<div className='flex flex-col justify-center items-center h-full w-full'>
			<p className='text-8xl'>
				{text === 'No Comments Yet! Be First to do add the comment.' ? (
					<BiCommentX />
				) : (
					<MdOutlineVideocamOff />
				)}
			</p>
			<p className='text-2xl text-center'>{text}</p>
		</div>
	);
};

export default NoResults;
