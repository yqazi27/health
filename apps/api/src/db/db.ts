import { drizzle } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import * as schema from "./schema";

const pool = new Pool({
  host: "localhost",
  port: 3001,
  user: "postgres",
  password: "postgres",
  database: "health_db",
});

export const db = drizzle(pool, { schema });
