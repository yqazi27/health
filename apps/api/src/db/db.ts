import { drizzle } from "drizzle-orm/node-postgres";
import * as schema from "./schema.js";

// Needs to be this way for ES Modules
import pg from "pg";
const { Pool } = pg;

const pool = new Pool({
  host: "localhost",
  port: 3001,
  user: "postgres",
  password: "postgres",
  database: "health_db",
});

export const db = drizzle(pool, { schema });
