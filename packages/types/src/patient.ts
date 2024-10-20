import { z } from "zod";

export const CreatePatient = z.object({
  /** Name of the patient */
  name: z.string().min(1, "Name is required"),

  /** Phone number of patient */
  phone: z
    .string()
    .min(1, "Phone number is required")
    .regex(/^\+[1-9]\d{1,14}$/, "Invalid international phone number format"),

  /** Email of patient */
  email: z.string().email("Invalid email address").nullable(),
});
export type CreatePatient = z.infer<typeof CreatePatient>;

export const Patient = z.object({
  ...CreatePatient.shape,
  id: z.string(),
  created_at: z.date(),
  updated_at: z.date(),
  metadata: z.unknown(),
});
export type Patient = z.infer<typeof Patient>;
