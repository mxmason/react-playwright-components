import path from 'node:path'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { vanillaExtractPlugin } from "@vanilla-extract/vite-plugin";

export default defineConfig({
  plugins: [react(), vanillaExtractPlugin()],
	resolve: {
		alias: {
			"~": path.resolve(import.meta.dirname, "./src"),
			"~styles": path.resolve(import.meta.dirname, "./src/styles"),
		},
	},
})
