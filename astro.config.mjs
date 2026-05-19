// @ts-check
import { defineConfig, fontProviders } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  image: {
    remotePatterns: [{ hostname: 'www.depero.de' }],
  },
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Averia Serif Libre',
      cssVariable: '--font-heading',
      weights: [300, 400, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['serif'],
    },
  ],
});
