import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";

const blog = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/blog" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        tags: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/projects" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        heroImage: z.string().optional(),
        technologies: z.array(z.string()).default([]),
        repoUrl: z.url().optional(),
        liveUrl: z.url().optional(),
        draft: z.boolean().default(false),
        featured: z.boolean().default(false),
    }),
});

const research = defineCollection({
    loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        institution: z.string(),
        role: z.string(),
        startDate: z.coerce.date(),
        endDate: z.coerce.date().optional(),
        advisors: z.array(z.string()).default([]),
        funding: z.string().optional(),
        tags: z.array(z.string()).default([]),
        websiteUrl: z.url().optional(),
        repoUrl: z.url().optional(),
        publications: z.array(z.string()).default([]),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog, projects, research };