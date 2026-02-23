import { defineCollection, z } from "astro:content";

const projects = defineCollection({
  type: "content",
  schema: z.object({
    title: z.string(),
    subtitle: z.string(),
    description: z.string(),
    status: z.enum(["Planeado", "En progreso", "Producción"]),
    year: z.string(),
    role: z.string(),
    duration: z.string(),
    github: z.string(),
    link: z.string(),
    techStack: z.array(z.string()),
    features: z.array(z.string()),
    challenges: z.array(z.string()),
    impact: z.array(z.string()),
    gallery: z.array(
      z.object({
        image: z.string(),
        alt: z.string(),
        caption: z.string(),
      }),
    ),
  }),
});

export const collections = { projects };
