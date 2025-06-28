import { z } from "zod";

export const careateServiceSchema = z.object({
  title: z.string().min(1),
  description: z.string().min(10),
  price: z.number().min(0),
  duration: z.number().min(1),
});

export const ServiceVAlidation = { careateServiceSchema };
