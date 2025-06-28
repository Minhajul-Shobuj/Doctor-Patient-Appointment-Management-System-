import mongoose from "mongoose";
import config from "../../config";
import { IDoctor } from "../Doctor/doctor.interface";
import bcrypt from "bcrypt";
import { User } from "./user.model";
import { Doctor } from "../Doctor/doctor.model";

const createDoctor = async (payload: IDoctor) => {
  const session = await mongoose.startSession();

  try {
    session.startTransaction();

    // Hash password
    const hashedPassword = await bcrypt.hash(
      payload.password,
      Number(config.bcrypt_salt_rounds)
    );

    // Create user record
    const userData = {
      name: payload.name,
      email: payload.email,
      phone: payload.phone,
      password: hashedPassword,
      role: "doctor",
    };
    const newUser = await User.create([userData], { session });
    if (!newUser || !newUser[0]?._id) {
      throw new Error("Failed to create user");
    }

    // Create doctor record linked to user
    const doctorData = {
      ...payload,
      password: hashedPassword,
    };
    const newDoctor = await Doctor.create([doctorData], { session });
    if (!newDoctor) {
      throw new Error("Failed to create doctor");
    }

    await session.commitTransaction();
    session.endSession();

    const { password: userPassword, ...userWithoutPassword } =
      newUser[0].toObject();
    const { password: doctorPassword, ...doctorWithoutPassword } =
      newDoctor[0].toObject();

    return {
      success: true,
      message: "Doctor created successfully",
      data: {
        user: userWithoutPassword,
        doctor: doctorWithoutPassword,
      },
    };
  } catch (error) {
    await session.abortTransaction();
    session.endSession();
    throw error;
  }
};

export const UserService = {
  createDoctor,
};
