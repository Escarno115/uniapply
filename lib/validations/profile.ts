import { z } from "zod";

export const personalInfoSchema = z.object({
  firstName: z.string().min(1, "Enter your first name"),
  lastName: z.string().min(1, "Enter your last name"),
  email: z.string().email("Enter a valid email address"),
  phone: z.string().min(7, "Enter a valid phone number"),
  dateOfBirth: z.string().min(1, "Enter your date of birth"),
});

export const academicSchema = z.object({
  schoolName: z.string().min(1, "Enter your school name"),
  graduationYear: z
    .string()
    .regex(/^\d{4}$/, "Enter a 4-digit year"),
  gpa: z
    .string()
    .optional()
    .refine((v) => !v || (Number(v) >= 0 && Number(v) <= 4.5), "Enter a GPA between 0 and 4.5"),
  testScore: z.string().optional(),
});

export const essaySchema = z.object({
  personalStatement: z
    .string()
    .min(100, "Your statement should be at least 100 characters")
    .max(6500, "Keep it under 6500 characters"),
});

export const profileSchema = personalInfoSchema
  .merge(academicSchema)
  .merge(essaySchema);

export type PersonalInfoValues = z.infer<typeof personalInfoSchema>;
export type AcademicValues = z.infer<typeof academicSchema>;
export type EssayValues = z.infer<typeof essaySchema>;
export type ProfileValues = z.infer<typeof profileSchema>;

export const stepSchemas = [personalInfoSchema, academicSchema, essaySchema] as const;
