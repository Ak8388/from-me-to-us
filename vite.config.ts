import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  server: {
    port: 3000,
  },
  build: {
    sourcemap: false,
    cssCodeSplit: true,
    minify: 'terser',
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
        // Menonaktifkan fitur terser yang mungkin menggunakan evaluasi string dinamis
        unsafe: false,
      },
      format: {
        comments: false,
      },
    },
    rollupOptions: {
      output: {
        // Mencegah penggunaan eval dalam chunking
        manualChunks: {
          vendor: ['react', 'react-dom', 'framer-motion'],
        },
      },
    },
  },
});