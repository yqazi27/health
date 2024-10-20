import {
  initTRPC,
  type inferRouterInputs,
  type inferRouterOutputs,
} from "@trpc/server";
import { Context } from "./context.js";
import SuperJSON from "superjson";
import type { AppRouter } from "./routers/app.js";
import { ZodError } from "zod";

function isDateString(value: string): boolean {
  // Simple regex for ISO 8601 date format, adjust as needed
  return /^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z$/.test(value);
}

/* eslint-disable */
function convertDatesInObject(obj: any): void {
  if (Array.isArray(obj)) {
    obj.forEach((item) => convertDatesInObject(item));
  } else if (typeof obj === "object" && obj !== null) {
    for (const key in obj) {
      if (typeof obj[key] === "string" && isDateString(obj[key])) {
        obj[key] = new Date(obj[key]);
      } else if (typeof obj[key] === "object") {
        convertDatesInObject(obj[key]);
      }
    }
  }
}

const trpc = initTRPC.context<Context>().create({
  transformer: {
    serialize: (data) => SuperJSON.serialize(data),
    deserialize: (data) => {
      // eslint-disable-next-line
      const deserialized = SuperJSON.deserialize(data);
      convertDatesInObject(deserialized);
      return deserialized;
    },
  },
  errorFormatter({ shape, error }) {
    return {
      ...shape,
      data: {
        ...shape.data,
        zodError:
          error.cause instanceof ZodError ? error.cause.flatten() : null,
      },
    };
  },
});

export const publicProcedure = trpc.procedure;
export const router = trpc.router;

export type RouterInput = inferRouterInputs<AppRouter>;
export type RouterOutput = inferRouterOutputs<AppRouter>;
