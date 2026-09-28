import { defineConfig } from 'vite'
import twig from 'vite-plugin-twig-drupal'
import { join } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = fileURLToPath(new URL('.', import.meta.url))

// Rend les fichiers .twig SDC comme des composants JS (Twig.js) -> pas besoin de PHP/Drupal.
export default defineConfig({
  plugins: [
    twig({
      namespaces: {
        components: join(__dirname, './components'),
      },
    }),
  ],
})
