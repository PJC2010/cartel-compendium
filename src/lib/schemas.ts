import { z } from 'astro/zod';

export const cartelSchema = z.object({
  id: z.string(),
  name: z.string(),
  alias: z.string().optional(),
  founded: z.string(),
  founders: z.array(z.string()),
  status: z.enum(['active', 'dismantled', 'fragmented']),
  description: z.string(),
  image: z.string(),
  logo: z.string().optional(),
  factions: z.array(z.string()),
});

export const factionSchema = z.object({
  id: z.string(),
  cartel_id: z.string(),
  name: z.string(),
  leader: z.string(),
  description: z.string(),
  image: z.string().optional(),
  members: z.array(z.string()),
});

export const figureSchema = z.object({
  id: z.string(),
  name: z.string(),
  alias: z.string().optional(),
  role: z.string(),
  faction_id: z.string(),
  cartel_id: z.string(),
  status: z.enum(['active', 'wanted', 'imprisoned', 'deceased', 'extradited', 'unknown']),
  dob: z.string().optional(),
  biography: z.string(),
  images: z.array(z.object({
    src: z.string(),
    caption: z.string().optional(),
  })),
  major_events: z.array(z.object({
    date: z.string(),
    event: z.string(),
  })),
});

export type Cartel = z.infer<typeof cartelSchema>;
export type Faction = z.infer<typeof factionSchema>;
export type Figure = z.infer<typeof figureSchema>;