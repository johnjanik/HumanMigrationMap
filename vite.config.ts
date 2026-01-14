import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  base: './',
  build: {
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'd3': ['d3', 'd3-geo', 'd3-geo-polygon'],
          'react': ['react', 'react-dom'],
        },
      },
    },
  },
  optimizeDeps: {
    include: ['d3', 'd3-geo', 'd3-geo-polygon', 'topojson-client'],
  },
});
