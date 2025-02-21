import { defineCollection, getCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';
import { DatetimeUtils } from '@utils/Datetime';

export interface PostCollections {
  id: string;
  layout: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  pubDate: string;
  tags: string[];
  author: string;
}
export interface PostSchema {
  layout: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  pubDate: Date;
  tags: string[];
  author: string;
}

const posts = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/pages/posts" }),
  schema: z.object({

    layout: z.string(),
    title: z.string(),
    description: z.string(),
    pubDate: z.coerce.date(),
    tags: z.array(z.string()),
    author: z.string(),
    image: z.object({
      url: z.string().url(),
      alt: z.string()
    }),
  })
});

export const collections = { posts };

const allBlogPostsFromCollections = await getCollection('posts');

console.warn(`allBlogPostsFromCollections (${allBlogPostsFromCollections.length}) = `);
// allBlogPostsFromCollections.forEach((post, index) => {
//   console.log(`-> ${index}. ${post.data.title} (${post.filePath})`);
// })

export const AllPosts = (): PostCollections[] => allBlogPostsFromCollections
  ?.map((post, index) => {
    return {
      id: `posts/${post.id}`,
      ...post.data,
      pubDate: DatetimeUtils.formatDateToDDMMYYYY(post.data.pubDate),
    };
  })
  .sort((a, b) => {
    const dateA = DatetimeUtils.parseDateFromDDMMYYYY(a.pubDate);
    const dateB = DatetimeUtils.parseDateFromDDMMYYYY(b.pubDate);
    return dateB.getTime() - dateA.getTime();
  });

export const DEFAULT_POSTS: PostCollections =
{
  id: 'posts/NotFound',
  layout: '../../layouts/PostLayout.astro',
  title: 'NaN',
  description: 'NaN',
  pubDate: DatetimeUtils.formatDateToDDMMYYYY(new Date()),
  tags: [],
  author: 'NaN',
  image: {
    url: 'https://via.placeholder.com/150',
    alt: 'NaN'
  }
};