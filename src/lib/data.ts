import { cartelSchema, factionSchema, figureSchema } from './schemas';
import type { Cartel, Faction, Figure } from './schemas';
import { z } from 'astro/zod';

import cartelsRaw from '../data/cartels.json';
import factionsRaw from '../data/factions.json';
import figuresRaw from '../data/figures.json';

function validateArray<T>(data: unknown[], schema: z.ZodType<T>, label: string): T[] {
  const result = z.array(schema).safeParse(data);
  if (!result.success) {
    console.error(`Invalid ${label} data:`, result.error.format());
    return [];
  }
  return result.data;
}

export function getCartels(): Cartel[] {
  return validateArray(cartelsRaw, cartelSchema, 'cartels');
}

export function getCartel(id: string): Cartel | undefined {
  return getCartels().find((c) => c.id === id);
}

export function getFactions(): Faction[] {
  return validateArray(factionsRaw, factionSchema, 'factions');
}

export function getFaction(id: string): Faction | undefined {
  return getFactions().find((f) => f.id === id);
}

export function getFactionsByCartel(cartelId: string): Faction[] {
  return getFactions().filter((f) => f.cartel_id === cartelId);
}

export function getFigures(): Figure[] {
  return validateArray(figuresRaw, figureSchema, 'figures');
}

export function getFigure(id: string): Figure | undefined {
  return getFigures().find((f) => f.id === id);
}

export function getFiguresByFaction(factionId: string): Figure[] {
  return getFigures().filter((f) => f.faction_id === factionId);
}

export function getFiguresByCartel(cartelId: string): Figure[] {
  return getFigures().filter((f) => f.cartel_id === cartelId);
}