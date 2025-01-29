import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  site: 'https://EmilyTarga.github.io',
  base: 'blog',
  i18n: {
    locales: ["en", "ptbr"],
    defaultLocale: "ptbr",
  },
  routing: {
    prefixDefaultLocale: true
  }
});
