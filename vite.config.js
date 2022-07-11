import path from 'path';
import { sveltekit } from '@sveltejs/kit/vite';

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [sveltekit()],
	resolve: {
		alias: {
			// these are the aliases and paths to them
			'@lib': path.resolve('./src/lib'),
			'@components': path.resolve('./src/lib/components'),
			'@icons': path.resolve('./src/lib/icons'),
			'@utils': path.resolve('./src/lib/utils')
		}
	}
};

export default config;
