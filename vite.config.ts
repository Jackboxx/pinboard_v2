import { sveltekit } from '@sveltejs/kit/vite';
import type { UserConfig } from 'vite';
import path from 'path';

const config: UserConfig = {
	plugins: [sveltekit()],
	resolve: {
		alias: [{ find: 'src', replacement: path.resolve(__dirname, 'src') }]
	},
	server: {
		port: 3000
	}
};

export default config;
