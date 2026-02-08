import { defineCollection, z } from "astro:content";

const videos = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    date: z.string(),
    youtubeUrl: z.string().url(),
    tags: z.array(z.string()).default([]),
    series: z.string().optional(),
    summary: z.string().optional(),
  }),
});

export const collections = { videos };
