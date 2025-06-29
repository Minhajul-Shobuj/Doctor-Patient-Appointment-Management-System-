import httpStatus from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AppointmentService } from './appoinment.service';
import { getUserId } from './appionment.utils';
import { RequestHandler } from 'express';

const createAppointment: RequestHandler = catchAsync(async (req, res) => {
  const userId = await getUserId(req.user.email);
  const result = await AppointmentService.createAppointment(req.body, userId!);
  sendResponse(res, {
    statusCode: httpStatus.CREATED,
    success: true,
    message: 'Appointment created successfully',
    data: result,
  });
});

const getAppointmentsByUser: RequestHandler = catchAsync(async (req, res) => {
  const userId = await getUserId(req.user.email);
  const result = await AppointmentService.getAppointmentsByUser(userId!);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointments fetched successfully',
    data: result,
  });
});

const getAppointmentsByDoctor: RequestHandler = catchAsync(async (req, res) => {
  const result = await AppointmentService.getAppointmentsByDoctor(req.user?.email);
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointments fetched successfully',
    data: result,
  });
});

const updateAppointmentStatus: RequestHandler = catchAsync(async (req, res) => {
  const { status } = req.body;
  const result = await AppointmentService.updateAppointmentStatus(
    req.params.id,
    req.user?.email,
    status,
  );
  sendResponse(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Appointment status updated successfully',
    data: result,
  });
});

export const AppointmentController = {
  createAppointment,
  getAppointmentsByUser,
  getAppointmentsByDoctor,
  updateAppointmentStatus,
};
