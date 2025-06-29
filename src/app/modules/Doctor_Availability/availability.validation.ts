import { z } from 'zod';

export const availabilitySchema = z.object({
  body: z.object({
    serviceId: z.string().min(1, 'Service ID is required'),
    day: z.enum(['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']),
    timeSlots: z
      .array(
        z.object({
          start: z.string().min(1, 'Start time is required'),
          end: z.string().min(1, 'End time is required'),
        }),
      )
      .min(1, 'At least one time slot is required'),
  }),
});

export const AvailabilityValidation = {
  availabilitySchema,
};
