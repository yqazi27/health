import { db } from "../db/db";
import { patient } from "../db/schema";
import { z } from "zod";

// export type Patient = InferSelectModel<typeof patient>;

export const Patient = z.object({
  id: z.string(),
  name: z.string().nullable(),
});
export type Patient = z.infer<typeof Patient>;

export class PatientRepo {
  async get() {
    const result = await db.select().from(patient);
    const first = result[0];
    return first;
  }
}

export function getPatientRepo() {
  return new PatientRepo();
}
