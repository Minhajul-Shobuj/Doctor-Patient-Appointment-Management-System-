import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { AppointmentService } from "./appoinment.service";
import { getUserId } from "./appionment.utils";

const createAppointment = catchAsync(async (req, res) => {
  const userId = await getUserId(req.user.email);
  const result = await AppointmentService.createAppointment(req.body, userId!);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Appointment created successfully",
    data: result,
  });
});

const getAppointmentsByUser = catchAsync(async (req, res) => {
  const userId = await getUserId(req.user.email);
  const result = await AppointmentService.getAppointmentsByUser(userId!);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Appointments fetched successfully",
    data: result,
  });
});

const getAppointmentsByDoctor = catchAsync(async (req, res) => {
  const doctorId = await getUserId(req.user?.email);
  const result = await AppointmentService.getAppointmentsByDoctor(doctorId!);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Appointments fetched successfully",
    data: result,
  });
});

const updateAppointmentStatus = catchAsync(async (req, res) => {
  const { appointmentStatus } = req.body;
  const doctorId = await getUserId(req.user?.email);
  const result = await AppointmentService.updateAppointmentStatus(
    req.params.id,
    doctorId!,
    appointmentStatus
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Appointment status updated successfully",
    data: result,
  });
});

export const AppointmentController = {
  createAppointment,
  getAppointmentsByUser,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
};
