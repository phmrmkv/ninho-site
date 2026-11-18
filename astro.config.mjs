// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://ninho.phmr.com.br',
  output: 'static',
  trailingSlash: 'always',
  build: { format: 'preserve' },
  integrations: [
    sitemap({
      filter: (pagina) => !pagina.includes('/404'),
      i18n: { defaultLocale: 'pt', locales: { pt: 'pt-BR', en: 'en' } },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
  },
});
