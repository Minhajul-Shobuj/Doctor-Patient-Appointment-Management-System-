import mongoose from "mongoose";
import { Service } from "../Services/service.model";
import { IAppointment } from "./appoinment.interface";
import { Appointment } from "./appoinment.model";
import { DoctorAvailability } from "../Doctor_Availability/availability.model";
import { getDayNameFromDate } from "./appionment.utils";
import AppError from "../../errors/AppError";
import status from "http-status";

const createAppointment = async (payload: IAppointment, userId: string) => {
  const { doctorId, serviceId, selectedDate, timeSlot } = payload;

  // Verify service exists for the doctor
  const serviceExists = await Service.findOne({
    _id: serviceId,
    doctorId,
  });
  if (!serviceExists) {
    throw new Error("Service not found for this doctor");
  }

  // Check if the slot is already booked
  const slotAlreadyBooked = await Appointment.findOne({
    doctorId,
    serviceId,
    selectedDate,
    "timeSlot.start": timeSlot.start,
    "timeSlot.end": timeSlot.end,
    status: { $in: ["pending", "accepted", "completed"] },
  });

  if (slotAlreadyBooked) {
    throw new Error("This slot is already booked");
  }

  // Create appointment
  const appointment = await Appointment.create({
    doctorId,
    serviceId,
    userId,
    selectedDate,
    timeSlot,
    status: "pending",
  });

  // Remove the booked slot from availability
  const dayName = getDayNameFromDate(selectedDate);

  await DoctorAvailability.updateOne(
    {
      doctorId: new mongoose.Types.ObjectId(doctorId),
      serviceId: new mongoose.Types.ObjectId(serviceId),
      day: dayName,
    },
    {
      $pull: {
        timeSlots: {
          start: timeSlot.start,
          end: timeSlot.end,
        },
      },
    }
  );
  return appointment;
};

const getAppointmentsByUser = async (userId: string) => {
  return await Appointment.find({ userId })
    .populate("doctorId")
    .populate("serviceId");
};

const getAppointmentsByDoctor = async (doctorId: string) => {
  return await Appointment.find({ doctorId });
};

const updateAppointmentStatus = async (
  appointmentId: string,
  doctorId: string,
  appointmentStatus: string
) => {
  const appointment = await Appointment.findById(appointmentId);
  if (!appointment) {
    throw new AppError(status.NOT_FOUND, "Appointment not found");
  }
  if (appointment.doctorId.toString() !== doctorId) {
    throw new AppError(
      status.UNAUTHORIZED,
      "You are not authorized to update this appointment"
    );
  }

  const result = await Appointment.updateOne(
    { _id: appointmentId },
    { appointmentStatus }
  );
};

export const AppointmentService = {
  createAppointment,
  getAppointmentsByUser,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
};
