import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const projects = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/work' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    problem: z.string().optional(),
    methods: z.array(z.string()),
    status: z.enum(['completed', 'in development']).default('completed'),
    order: z.number(),
    thumbnail: z.string().optional(),
    video: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/research' }),
  schema: z.object({
    title: z.string(),
    summary: z.string(),
    tags: z.array(z.string()),
    order: z.number(),
    thumbnail: z.string().optional(),
    links: z
      .array(
        z.object({
          label: z.string(),
          href: z.string(),
        })
      )
      .default([]),
  }),
});

export const collections = { work: projects, research };
