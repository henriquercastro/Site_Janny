import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publication = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/publicacoes' }),
  schema: z.object({
    title: z.string(),
    type: z.string().optional(),
    vehicle: z.string().optional(),
    date: z.coerce.date().optional(),
    year: z.number().optional(),
    category: z.string().optional(),
    cover: z.string().optional(),
    summary: z.string().optional(),
    externalUrl: z.string().url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const event = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/eventos' }),
  schema: z.object({
    title: z.string(),
    date: z.coerce.date().optional(),
    city: z.string().optional(),
    institution: z.string().optional(),
    theme: z.string().optional(),
    cover: z.string().optional(),
    description: z.string().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

const podcast = defineCollection({
  loader: glob({ pattern: '**/*.{md,mdx}', base: './src/content/podcasts' }),
  schema: z.object({
    title: z.string(),
    episodeNumber: z.number().optional(),
    guests: z.string().optional(),
    date: z.coerce.date().optional(),
    cover: z.string().optional(),
    spotifyUrl: z.string().url(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false)
  })
});

export const collections = {
  publicacoes: publication,
  eventos: event,
  podcasts: podcast
};
