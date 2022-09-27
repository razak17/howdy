import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getUsers } from '../lib/api';
import { IUser } from '../lib/types';

const authStore = (set: any) => ({
	userProfile: null,
	allUsers: [],

	addUser: (user: IUser) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null }),

	fetchAllUsers: async () => {
		const data = await getUsers();

		set({ allUsers: data });
	}
});

const useAuthStore = create(
	persist(authStore, {
		name: 'auth'
	})
);

export default useAuthStore;
