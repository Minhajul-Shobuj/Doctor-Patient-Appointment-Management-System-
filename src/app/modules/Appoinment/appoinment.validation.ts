import { z } from "zod";

const createAppointmentValidation = z.object({
  body: z.object({
    doctorId: z.string().min(1),
    serviceId: z.string().min(1),
    selectedDate: z.string().min(1),
    timeSlot: z.object({
      start: z.string().min(1),
      end: z.string().min(1),
    }),
  }),
});

const updateAppointmentStatusValidation = z.object({
  body: z.object({
    appointmentStatus: z.enum(["accepted", "cancelled", "completed"]),
  }),
});

export const AppointmentValidation = {
  createAppointmentValidation,
  updateAppointmentStatusValidation,
};
