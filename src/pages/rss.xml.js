import rss, { pagesGlobToRssItems } from '@astrojs/rss';
import { PROCESS_ENV } from '@configs/env';

export async function GET(context) {
  return rss({
    title: 'Astro Learner | Blog',
    description: 'My journey learning Astro',
    site: PROCESS_ENV.SITE_URL + PROCESS_ENV.BASE_PATH + '/rss.xml',
    items: await pagesGlobToRssItems(import.meta.glob('./**/*.md')),
    customData: `<language>en-us</language>`,
  });
}