import mongoose from "mongoose";
import { Doctor } from "./doctor.model";

const getAllDoctors = async () => {
  const doctors = await Doctor.aggregate([
    {
      $lookup: {
        from: "services",
        localField: "_id",
        foreignField: "doctorId",
        as: "services",
      },
    },
    {
      $lookup: {
        from: "doctorAvailabilities",
        localField: "_id",
        foreignField: "doctorId",
        as: "availabilities",
      },
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);

  return doctors;
};

const getDoctorById = async (id: string) => {
  const doctor = await Doctor.aggregate([
    {
      $match: { _id: new mongoose.Types.ObjectId(id) },
    },
    {
      $lookup: {
        from: "services",
        localField: "_id",
        foreignField: "doctorId",
        as: "services",
      },
    },
    {
      $lookup: {
        from: "doctoravailabilities",
        localField: "_id",
        foreignField: "doctorId",
        as: "availabilities",
      },
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);

  if (!doctor || doctor.length === 0) {
    throw new Error("Doctor not found");
  }

  return doctor[0];
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
};
