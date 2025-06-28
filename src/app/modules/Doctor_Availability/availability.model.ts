import { model, Schema } from "mongoose";
import { IAvailability } from "./availability.interface";

const availabilitySchema = new Schema<IAvailability>(
  {
    doctorId: { type: Schema.Types.ObjectId, ref: "Doctor", required: true },
    serviceId: { type: Schema.Types.ObjectId, ref: "Service", required: true },
    day: { type: String, required: true },
    timeSlots: [
      {
        start: { type: String, required: true },
        end: { type: String, required: true },
      },
    ],
  },
  { timestamps: true }
);
export const DoctorAvailability = model<IAvailability>(
  "DoctorAvailability",
  availabilitySchema
);
