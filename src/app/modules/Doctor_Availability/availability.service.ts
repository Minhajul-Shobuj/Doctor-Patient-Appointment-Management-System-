import status from 'http-status';
import AppError from '../../errors/AppError';
import { Doctor } from '../Doctor/doctor.model';
import { Service } from '../Services/service.model';
import { IAvailability } from './availability.interface';
import { DoctorAvailability } from './availability.model';

const setAvailability = async (payload: IAvailability, doctorEmail: string) => {
  const doctordata = await Doctor.findOne({ email: doctorEmail });
  const serviceData = await Service.findById(payload.serviceId);
  if (!serviceData) {
    throw new AppError(status.NOT_FOUND, 'Service not found');
  }
  const result = await DoctorAvailability.create({
    ...payload,
    doctorId: doctordata?._id,
  });
  return result;
};

export const AvailabilityService = {
  setAvailability,
};
