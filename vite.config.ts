
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  // Fix: Cast process to any to resolve 'cwd' property missing on Process type
  const env = loadEnv(mode, (process as any).cwd(), '')

  return {
    plugins: [react()],
    build: {
      outDir: 'dist',
    },
    // Ensure asset paths are correct relative to the deployment root
    base: './',
    define: {
      // Stringify the API key to inject it into the client-side code safely
      'process.env.API_KEY': JSON.stringify(env.API_KEY),
    }
  }
})
