import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [react()],
	resolve: {
		alias: {
			'@components': path.resolve(__dirname, './src/components'),
			'@public': path.resolve(__dirname, './public'),
			"@assets": path.resolve(__dirname, './assets'),
			"@utils": path.resolve(__dirname, './src/utils'),
		},
	},
})
