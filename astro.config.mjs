import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// https://astro.build/config
export default defineConfig({
  site: "https://harryitc.github.io",
  // base: "/astro-blog",
  integrations: [preact()]
});