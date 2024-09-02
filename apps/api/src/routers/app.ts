import { z } from "zod";

import { publicProcedure, router } from "../trpc";
import { getPatientRepo } from "../repos/patient";

export const schema = z.object({
  name: z.string(),
});

export const appRouter = router({
  get: publicProcedure.input(schema).query(async ({ input }) => ({
    success: true,
    message: `Hello ${input.name}!`,
  })),

  testDb: publicProcedure.query(async () => {
    const patientRepo = getPatientRepo();
    const result = await patientRepo.get();
    return result;
  }),
});

export type AppRouter = typeof appRouter;
