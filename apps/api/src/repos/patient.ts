import { db } from "../db/db.js";
import { Patient as PatientTable } from "../db/patient.js";
import { eq, like } from "drizzle-orm";
import { Patient, CreatePatient } from "types";

export class PatientRepo {
  async test() {
    const result = await db.select().from(PatientTable);
    const first = result[0];
    return first;
  }

  async get(id: string) {
    const result = await db
      .select()
      .from(PatientTable)
      .where(eq(PatientTable.id, id));
    return result[0];
  }

  async create(patient: CreatePatient) {
    const result = await db
      .insert(PatientTable)
      .values({
        name: patient.name,
        phone: patient.phone,
        email: patient.email,
      })
      .returning();

    /** Return the Patient - TODO: Define a type for the Return */
    return result[0];
  }

  async searchByPhonePrefix(
    prefix: string,
    limit: number = 10
  ): Promise<Patient[]> {
    const result = await db
      .select()
      .from(PatientTable)
      .where(like(PatientTable.phone, `${prefix}%`))
      .limit(limit);
    return result;
  }
}

export function getPatientRepo() {
  return new PatientRepo();
}
