import { pgTable, uuid, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const Tenant = pgTable("tenant", {
  /** UUID of the tenant */
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  /** Creation of tenant */
  created_at: timestamp("created_at")
    .default(sql`now()`)
    .notNull(),

  /** Last updated of tenant */
  updated_at: timestamp("updated_at")
    .default(sql`now()`)
    .notNull(),

  /** Name of the tenant */
  name: varchar("name").notNull(),

  /** Metadata in JSONB for the tenant */
  metadata: jsonb("metadata").$type<unknown>().default({}),
});
