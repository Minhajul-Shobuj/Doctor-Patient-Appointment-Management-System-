import { model, Schema } from 'mongoose';
import { IAppointment } from './appoinment.interface';

const appointmentSchema = new Schema<IAppointment>(
  {
    doctorId: { type: Schema.Types.ObjectId, ref: 'Doctor', required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: 'Service', required: true },
    userId: { type: Schema.Types.ObjectId, ref: 'User', required: true },
    selectedDate: { type: String, required: true },
    timeSlot: {
      start: { type: String, required: true },
      end: { type: String, required: true },
    },
    status: {
      type: String,
      enum: ['pending', 'approved', 'cancelled', 'rejected'],
      default: 'pending',
    },
  },
  { timestamps: true },
);

export const Appointment = model<IAppointment>('Appointment', appointmentSchema);
