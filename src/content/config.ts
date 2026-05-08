import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string(),
    pubDate: z.date(),
    updatedDate: z.date().optional(),
    category: z.enum(['Research', 'Training', 'Resources', 'Stories', 'News & Events']),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    author: z.string().default('Valiant Heart Companions Team'),
    featured: z.boolean().default(false),
    readingTime: z.number().optional(),
  }),
});

const dogs = defineCollection({
  type: 'content',
  schema: z.object({
    name: z.string(),
    breed: z.string(),
    image: z.string(),
    imageAlt: z.string(),
    status: z.enum(['In Training', 'Placed', 'Available for Placement']),
    skills: z.array(z.string()),
    personality: z.string(),
    order: z.number().default(99),
  }),
});

export const collections = { blog, dogs };
