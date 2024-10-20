import { z } from "zod";
import { publicProcedure, router } from "../trpc.js";
import { getPatientRepo } from "../repos/patient.js";
import { CreatePatient } from "types";

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
    const result = await patientRepo.test();
    return result;
  }),

  createPatient: publicProcedure
    .input(CreatePatient)
    .mutation(async ({ input }) => {
      const patientRepo = getPatientRepo();
      const result = await patientRepo.create(input);
      return result;
    }),

  searchByPhone: publicProcedure
    .input(z.object({ prefix: z.string() }))
    .query(async ({ input }) => {
      const patientRepo = getPatientRepo();
      return patientRepo.searchByPhonePrefix(input.prefix);
    }),
});

export type AppRouter = typeof appRouter;
