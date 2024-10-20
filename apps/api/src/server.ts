import express, { type Express } from "express";
import * as trpcExpress from "@trpc/server/adapters/express";
import { createContext } from "./context.js";
import { appRouter } from "./routers/app.js";
import cors from "cors";

const app = express();

app.use(cors());

app.use(
  "/trpc",
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext,
  })
);
app.listen(4000);

export const viteNodeApp: Express = app;
