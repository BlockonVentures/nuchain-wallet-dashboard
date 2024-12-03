// vite.config.ts
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  test: {
    parallel: false,
    globals: true, 
    environment: 'jsdom', 
    setupFiles: './setupTests.js',
    transformMode: {
      web: [/\.[jt]sx$/], 
    },
  },
});