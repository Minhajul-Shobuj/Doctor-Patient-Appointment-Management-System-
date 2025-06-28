import { z } from "zod";

export const careateServiceSchema = z.object({
  body: z.object({
    title: z.string().min(1),
    description: z.string().min(10),
    price: z.number().min(0),
    duration: z.number().min(1),
  }),
});
export const updateServiceSchema = z.object({
  body: z.object({
    title: z.string().min(1).optional(),
    description: z.string().min(10).optional(),
    price: z.number().min(0).optional(),
    duration: z.number().min(1).optional(),
  }),
});

export const ServiceValidation = { careateServiceSchema, updateServiceSchema };
