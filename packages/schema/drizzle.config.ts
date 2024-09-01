import { defineConfig } from "drizzle-kit";

export default defineConfig({
  schema: "./schema.ts",
  dialect: "postgresql",
  dbCredentials: {
    host: "localhost",
    port: 3001,
    user: "postgres",
    password: "postgres",
    database: "health_db",
    ssl: false,
  },
});
