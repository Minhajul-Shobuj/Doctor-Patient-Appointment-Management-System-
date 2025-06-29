import { z } from 'zod';

const createUserSchemaValidation = z.object({
  body: z.object({
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email format'),
    phone: z.string().min(10, 'Phone must be at least 10 digits'),
    age: z.number().min(0, 'Age must be a positive number'),
    gender: z.enum(['male', 'female', 'other'], {
      required_error: 'Gender is required',
    }),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

export const UserValidation = {
  createUserSchemaValidation,
};
