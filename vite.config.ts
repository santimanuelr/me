import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// Served at the user-page root (https://santimanuelr.github.io/), so base is '/'.
export default defineConfig({
  base: '/',
  plugins: [react(), tailwindcss()],
})
