import { db } from "../db/db";
import { Patient } from "../db/schema";
export class PatientRepo {
  async get() {
    const result = await db.select().from(Patient);
    const first = result[0];
    return first;
  }
}

export function getPatientRepo() {
  return new PatientRepo();
}
