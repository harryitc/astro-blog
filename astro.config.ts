import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// Note: all relative imports
import { PROCESS_ENV } from './src/configs/process-env';
import { formatIntegration } from './integration';

const { SITE_URL, BASE_PATH } = PROCESS_ENV;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [
    preact(),
    formatIntegration(),
  ],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});