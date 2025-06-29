import mongoose from 'mongoose';
import { Doctor } from './doctor.model';
import { DoctorFilters } from './doctor.interface';

const getAllDoctors = async (filters: DoctorFilters) => {
  const { hospitalName, specialization, serviceName } = filters;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const matchStage: any = {};

  if (hospitalName) {
    matchStage.hospitalName = { $regex: hospitalName, $options: 'i' };
  }

  if (specialization) {
    matchStage.specialization = { $regex: specialization, $options: 'i' };
  }
  const doctors = await Doctor.aggregate([
    // Apply doctor-level filters
    { $match: matchStage },

    // Join with services
    {
      $lookup: {
        from: 'services',
        localField: '_id',
        foreignField: 'doctorId',
        as: 'services',
      },
    },

    // Filter services by name
    ...(serviceName
      ? [
          {
            $addFields: {
              services: {
                $filter: {
                  input: '$services',
                  as: 'service',
                  cond: {
                    $regexMatch: {
                      input: '$$service.title',
                      regex: serviceName,
                      options: 'i',
                    },
                  },
                },
              },
            },
          },
        ]
      : []),

    // Join with availabilities
    {
      $lookup: {
        from: 'doctoravailabilities',
        localField: '_id',
        foreignField: 'doctorId',
        as: 'availabilities',
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
        from: 'services',
        localField: '_id',
        foreignField: 'doctorId',
        as: 'services',
      },
    },
    {
      $lookup: {
        from: 'doctoravailabilities',
        localField: '_id',
        foreignField: 'doctorId',
        as: 'availabilities',
      },
    },
    {
      $project: {
        password: 0,
      },
    },
  ]);

  if (!doctor || doctor.length === 0) {
    throw new Error('Doctor not found');
  }

  return doctor[0];
};

export const DoctorService = {
  getAllDoctors,
  getDoctorById,
};
