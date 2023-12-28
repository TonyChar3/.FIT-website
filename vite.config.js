import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: './',
});

// Home: '10.0.0.78'
// School: '142.169.16.15'
//  server: {
//   port: 3000,
//   host: '127.0.0.1'
// },
// base:"/"