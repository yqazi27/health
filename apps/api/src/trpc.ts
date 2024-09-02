import {
  initTRPC,
  type inferRouterInputs,
  type inferRouterOutputs,
} from "@trpc/server";
import { Context } from "./context";

import type { AppRouter } from "./routers/app";
const trpc = initTRPC.context<Context>().create();

export const publicProcedure = trpc.procedure;
export const router = trpc.router;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
