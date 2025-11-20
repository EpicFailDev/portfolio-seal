import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ command, mode }) => {
  const env = loadEnv(mode, '.', '');
  // Default to relative paths so `dist/index.html` works when opened directly (file://)
  // Set VITE_BASE='/' when deploying to Netlify or root-hosted sites.
  const base = env.VITE_BASE || './';
  return {
    plugins: [react()],
    base,
    server: {
      port: 5173
    }
  };
});
