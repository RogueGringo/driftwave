import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://roguegringo.github.io/driftwave/ (GitHub Pages, project site).
  base: '/driftwave/',
  plugins: [react()],
})
