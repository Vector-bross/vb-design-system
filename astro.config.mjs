// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Tailwind v4 via the Vite plugin (no @astrojs/tailwind integration in v4).
// build.format 'file' → dist/index.html + dist/molecules.html (flat files,
// so cross-page links work when opened directly from disk).
export default defineConfig({
  build: { format: 'file' },
  vite: {
    plugins: [tailwindcss()],
  },
});
