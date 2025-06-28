import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { DoctorService } from "./doctor.service";

const getAllDoctors = catchAsync(async (req, res) => {
  const doctors = await DoctorService.getAllDoctors();
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: "Doctors retrieved successfully",
    data: doctors,
  });
});

const getDoctorById = catchAsync(async (req, res) => {
  const { id } = req.params;
  const doctor = await DoctorService.getDoctorById(id);
  sendResponse(res, {
    statusCode: status.FOUND,
    success: true,
    message: "Doctor retrieved successfully",
    data: doctor,
  });
});

export const DoctorController = {
  getAllDoctors,
  getDoctorById,
};
