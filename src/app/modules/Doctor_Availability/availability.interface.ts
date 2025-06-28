import { Types } from "mongoose";

export type IAvailability = {
  doctorId: Types.ObjectId;
  serviceId: Types.ObjectId;
  day: string;
  timeSlots: {
    start: string;
    end: string;
  }[];
};
