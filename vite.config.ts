import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  base:"https://toqausama136.github.io/Skin-Care/",
  plugins: [react(), tailwindcss()],
})



