import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit()],
	resolve: {
		alias: {
			"@service": path.resolve("src/service"),
			"@image": path.resolve("src/imgs"),
			"@routes": path.resolve("src/routes"),
			"@__tests__": path.resolve("src/__tests__"),
			"@components": path.resolve("src/components"),
		}
	},
	server: {
		proxy: {
			'/api': {
				changeOrigin: true,
				target: 'http://127.0.0.1:8000',
			},
		}
	}
});
