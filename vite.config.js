<<<<<<< HEAD
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
=======
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    port:3000,
  }
})
>>>>>>> da7594229a9af5924c80607a7ac77357e92025c3
