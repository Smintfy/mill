import { eq } from "drizzle-orm";

import { db } from "../index";
import { SelectLink, links } from "../schema";

export async function getLinks(): Promise<SelectLink[] | undefined> {
  return await db.select().from(links);
};

export async function getLinkById(id: string): Promise<SelectLink | undefined> {
  return await db.select().from(links).where(eq(links.id, id)).get();
}

export async function getLinkBySlug(slug: string): Promise<SelectLink | undefined> {
  return await db.select().from(links).where(eq(links.slug, slug)).get();
};