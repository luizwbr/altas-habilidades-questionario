import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
const repository = process.env.GITHUB_REPOSITORY?.split('/')[1] ?? ''
const isUserOrOrgPagesRepo = repository.endsWith('.github.io')
const pagesBase = repository && !isUserOrOrgPagesRepo ? `/${repository}/` : '/'

export default defineConfig({
  base: process.env.GITHUB_ACTIONS ? pagesBase : '/',
  plugins: [react()],
})
