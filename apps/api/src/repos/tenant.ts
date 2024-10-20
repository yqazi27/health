import { db } from "../db/db";
import { Tenant as TenantTable } from "../db/tenant";
import { z } from "zod";
import { eq } from "drizzle-orm";

export class TenantRepo {
  async test() {
    const result = await db.select().from(TenantTable);
    const first = result[0];
    return first;
  }

  async get(id: string) {
    const result = await db
      .select()
      .from(TenantTable)
      .where(eq(TenantTable.id, id));
    return result[0];
  }

  /** TODO: Support creation of tenant */
}

export function getTenantRepo() {
  return new TenantRepo();
}
