import { z } from "zod";

export const buyerSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email").optional(),
  phone: z
    .string()
    .min(10, "Phone number must be at least 10 digits")
    .max(15, "Phone number too long"),
  city: z.string().optional(),
  propertyType: z.string().optional(),
  bhk: z.string().optional(),
  purpose: z.enum(["Buy", "Rent"]).optional(),
});
