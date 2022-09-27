import create from 'zustand';
import { persist } from 'zustand/middleware';
import { getAllUsers } from '../lib/api';

const authStore = (set: any) => ({
	userProfile: null,
	allUsers: [],

	addUser: (user: any) => set({ userProfile: user }),
	removeUser: () => set({ userProfile: null }),

	fetchAllUsers: async () => {
		const res = await getAllUsers();

		set({ allUsers: res });
	}
});

const useAuthStore = create(
	persist(authStore, {
		name: 'auth'
	})
);

export default useAuthStore;
