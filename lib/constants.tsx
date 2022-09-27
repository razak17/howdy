import { BsCode, BsEmojiSunglasses } from 'react-icons/bs';
import { GiCakeSlice, GiGalaxy, GiLipstick, GiMusicalNotes } from 'react-icons/gi';
import { FaPaw, FaMedal, FaGamepad } from 'react-icons/fa';

export const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

export const topics = [
	{
		name: 'coding',
		icon: <BsCode />
	},
	{
		name: 'comedy',
		icon: <BsEmojiSunglasses />
	},
	{
		name: 'gaming',
		icon: <FaGamepad />
	},
	{
		name: 'food',
		icon: <GiCakeSlice />
	},
	{
		name: 'dance',
		icon: <GiGalaxy />
	},
	{
		name: 'music',
		icon: <GiMusicalNotes />
	},
	{
		name: 'beauty',
		icon: <GiLipstick />
	},
	{
		name: 'animals',
		icon: <FaPaw />
	},
	{
		name: 'sports',
		icon: <FaMedal />
	}
];

export const footerList1 = [
	'About',
	'Newsroom',
	'Store',
	'Contact',
	'Careers',
	'Privacy Policy',
	'Creator Directory'
];
export const footerList2 = [
	'TikTik for Good',
	'Advertise',
	'Developers',
	'Transparency',
	'TikTik Rewards'
];
export const footerList3 = [
	'Help',
	'Safety',
	'Terms',
	'Privacy',
	'Creator Portal',
	'Community Guidelines'
];
