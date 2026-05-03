import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import icon from 'astro-icon';

export default defineConfig({
  output: 'static',
  integrations: [
    tailwind({ applyBaseStyles: false }),
    icon(),
  ],
  vite: {
    ssr: {
      noExternal: ['@fontsource-variable/geist'],
    },
  },
});
