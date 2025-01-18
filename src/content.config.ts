import { defineCollection, getCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

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

export const AllPosts = () => allBlogPostsFromCollections.map((post, index) => {
  return {
    id: `posts/${post.id}`,
    ...post.data
  };
});