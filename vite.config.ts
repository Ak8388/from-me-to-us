import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: 'esnext',
    minify: false, // Menonaktifkan minifikasi untuk menghindari isu pemrosesan modul di lingkungan preview
  },
});