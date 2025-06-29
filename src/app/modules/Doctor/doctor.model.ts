import mongoose, { model, Schema } from "mongoose";
import { IDoctor } from "./doctor.interface";

const DoctorSchema = new Schema<IDoctor>(
  {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    phone: { type: String, unique: true, required: true },
    age: { type: Number, required: true },
    gender: { type: String, enum: ["male", "female", "other"], required: true },
    password: { type: String, required: true },
    specialization: { type: String, required: true },
    hospitalName: { type: String, required: true },
    hospitalFloor: { type: String, required: true },
  },
  { timestamps: true }
);

export const Doctor = model<IDoctor>("Doctor", DoctorSchema);
