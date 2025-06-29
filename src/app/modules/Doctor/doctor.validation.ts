import { z } from 'zod';

export const createDoctorSchema = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
    specialization: z.string().min(1, 'Specialization is required'),
    hospitalName: z.string().min(1, 'Hospital name is required'),
    hospitalFloor: z.string().min(1, 'Hospital floor is required'),
  }),
});

export const DoctorValidation = {
  createDoctorSchema,
};
