import { Types } from "mongoose";

export type IAppointment = {
  doctorId: Types.ObjectId;
  serviceId: Types.ObjectId;
  userId: Types.ObjectId;
  selectedDate: string;
  timeSlot: {
    start: string;
    end: string;
  };
  status: "pending" | "accepted" | "cancelled" | "completed";
};
