// @ts-check
import { defineConfig } from 'astro/config';

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // La dirección de tu web publicada.
  // Si compras un dominio propio, SOLO cambia esta línea.
  site: "https://astro-codigo-creativo.cristiansandoval2202.workers.dev",
  
  integrations: [sitemap()]
});