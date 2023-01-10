import { browser } from '$app/environment';
import type { User } from '@prisma/client';
import { writable, type Writable } from 'svelte/store';

const userDefault = browser ? JSON.parse(sessionStorage.getItem('user') ?? '{}') : undefined;
export const userStore: Writable<User | undefined> = writable(userDefault);

userStore.subscribe((user) => {
	if (browser) {
		sessionStorage.setItem('user', JSON.stringify(user));
	}
});
