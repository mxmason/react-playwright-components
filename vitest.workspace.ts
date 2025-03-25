import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
	// If you want to keep running your existing tests in Node.js, uncomment the next line.
	// 'vite.config.ts',
	{
		extends: 'vite.config.ts',
		test: {
			browser: {
				enabled: true,
				provider: 'playwright',
        screenshotFailures: false,
				// https://vitest.dev/guide/browser/playwright
				instances: [{ browser: 'chromium' }],
			},
			exclude: [
				'**/node_modules/**',
				'**/dist/**',
				'**/cypress/**',
				'**/.{idea,git,cache,output,temp}/**',
				'**/{karma,rollup,webpack,vite,vitest,jest,ava,babel,nyc,cypress,tsup,build,eslint,prettier}.config.*',
				'**/*.component.*',
			],
		},
	},
]);
