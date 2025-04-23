import { z } from "zod";

export const contactSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters")
    .regex(/^[a-zA-Z\s]+$/, "Name must only contain letters and spaces"),
  subject: z.string().nonempty("Subject is required"),
  email: z.string().email("Must be a valid email"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters")
    .max(1000, "The message exceeded 1000 characters"),
});

export type ContactFormSchema = z.infer<typeof contactSchema>;
