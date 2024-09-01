import { pgTable, uuid, varchar } from "drizzle-orm/pg-core";
import { sql } from "drizzle-orm";

export const patient = pgTable("patient", {
  /** UUID of the patient */
  id: uuid("id")
    .default(sql`gen_random_uuid()`)
    .primaryKey(),

  /** Name of the patients */
  name: varchar("name"),
});
