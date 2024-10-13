import { pgTable, uuid, varchar, timestamp, jsonb } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const Patient = pgTable("patient", {
  /** UUID of the patient */
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  /** Creation of patient */
  created_at: timestamp("created_at")
    .default(sql`now()`)
    .notNull(),

  /** Last updated of patient */
  updated_at: timestamp("updated_at")
    .default(sql`now()`)
    .notNull(),

  /** Name of the patient */
  name: varchar("name"),

  /** Phone number of patient */
  phone: varchar("phone").unique(),

  /** Email of patient */
  email: varchar("email").unique(),

  /** Metadata in JSONB for the patient */
  metadata: jsonb("metadata").$type<unknown>().default({}),
});
