import { NextPage } from 'next';
import React, { useEffect } from 'react';
import { IUser } from '../lib/types';

interface IProps {
	fetchAllUsers: () => void;
	allUsers: IUser[];
}

const SuggestedAccounts: NextPage<IProps> = ({ fetchAllUsers, allUsers }) => {
	console.log({ allUsers });

	useEffect(() => {
		fetchAllUsers();
	}, [fetchAllUsers]);

	return <div>SuggestedAccounts</div>;
};

export default SuggestedAccounts;
