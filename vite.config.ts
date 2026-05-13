import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  // base must be '/' for Capacitor — the native WebView loads files locally
  base: '/',
  plugins: [react(), tailwindcss()],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    // Capacitor needs non-hashed filenames for asset references
    assetsDir: 'assets',
  },
})
