import { Types } from "mongoose";

export type IService = {
  doctorId: Types.ObjectId;
  title: string;
  description: string;
  price: number;
  duration: number;
};
