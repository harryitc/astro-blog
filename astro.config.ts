import { defineConfig } from 'astro/config';

import preact from "@astrojs/preact";

// Note: all relative imports
import { PROCESS_ENV } from './src/configs/process-env';
import { formatIntegration } from './integration';
import mdx from '@astrojs/mdx';
import { pluginCollapsibleSections } from '@expressive-code/plugin-collapsible-sections';
import { pluginLineNumbers } from '@expressive-code/plugin-line-numbers';
import expressiveCode from 'astro-expressive-code';

import tailwind from '@astrojs/tailwind';

const { SITE_URL, BASE_PATH } = PROCESS_ENV;

// https://astro.build/config
export default defineConfig({
  site: SITE_URL,
  base: BASE_PATH,
  integrations: [preact(), formatIntegration(), expressiveCode({

    // You can use any of the themes bundled with Shiki by name,
    // specify a path to JSON theme file, or pass an instance
    // of the `ExpressiveCodeTheme` class here:
    themes: ['dracula', 'solarized-light'],
    shiki: {
      // You can pass additional plugin options here,
      // e.g. to load custom language grammars:
      langs: [
        // import('./some-exported-grammar.mjs'),
        // JSON.parse(fs.readFileSync('./some-json-grammar.json', 'utf-8'))
      ],
    },
    plugins: [
      pluginLineNumbers(),
      pluginCollapsibleSections()
    ],
  }), mdx(), tailwind()],
  vite: {
    build: {
      sourcemap: false,
    },
  },
});