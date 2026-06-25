import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Served from https://roguegringo.github.io/driftwave/ (GitHub Pages, project site).
  // Override for forks / custom domains / root hosting, e.g. DOCS_BASE=/ npm run build.
  base: process.env.DOCS_BASE || '/driftwave/',
  plugins: [react()],
})
