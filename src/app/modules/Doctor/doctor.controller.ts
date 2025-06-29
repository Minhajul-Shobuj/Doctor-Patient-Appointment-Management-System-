import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { DoctorService } from './doctor.service';
import { RequestHandler } from 'express';

const getAllDoctors: RequestHandler = catchAsync(async (req, res) => {
  const { hospitalName, specialization, serviceName } = req.query;
  const filters = {
    ...(hospitalName && { hospitalName: hospitalName.toString() }),
    ...(specialization && { specialization: specialization.toString() }),
    ...(serviceName && { serviceName: serviceName.toString() }),
  };
  const doctors = await DoctorService.getAllDoctors(filters);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctors retrieved successfully',
    data: doctors,
  });
});

const getDoctorById: RequestHandler = catchAsync(async (req, res) => {
  const { id } = req.params;
  const doctor = await DoctorService.getDoctorById(id);
  sendResponse(res, {
    statusCode: status.FOUND,
    success: true,
    message: 'Doctor retrieved successfully',
    data: doctor,
  });
});

export const DoctorController = {
  getAllDoctors,
  getDoctorById,
};
