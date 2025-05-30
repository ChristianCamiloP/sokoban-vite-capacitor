import { defineConfig } from 'vite';

export default defineConfig({
  root: 'www',         // ahora el origen es la carpeta www
  build: {
    outDir: '../dist', // el build va a dist como lo espera Capacitor
    emptyOutDir: true
  }
});
