import { model, Schema } from "mongoose";
import { IService } from "./service.interface";

const ServiceSchema = new Schema<IService>(
  {
    doctorId: { type: Schema.ObjectId, ref: "Doctor", required: true },
    title: { type: String, required: true },
    description: { type: String, required: true },
    price: { type: Number, required: true },
    duration: { type: Number, required: true },
  },
  { timestamps: true }
);

export const Service = model<IService>("Service", ServiceSchema);
