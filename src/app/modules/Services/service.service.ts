import { Doctor } from "../Doctor/doctor.model";
import { IService } from "./service.interface";
import { Service } from "./service.model";

const addService = async (payload: IService, doctorEmail: string) => {
  const doctorData = await Doctor.findOne({
    email: doctorEmail,
  });
  const serviceData = {
    ...payload,
    doctorId: doctorData?._id,
  };
  const result = await Service.create(serviceData);
  return result;
};

const getMyServices = async (doctorEmail: string) => {
  const doctorData = await Doctor.findOne({
    email: doctorEmail,
  });
  const result = await Service.find({
    doctorId: doctorData?._id,
  });
  return result;
};

const updateService = async (
  id: string,
  payload: Partial<IService>,
  doctorEmail: string
) => {
  const doctorData = await Doctor.findOne({
    email: doctorEmail,
  });
  const updateService = await Service.findOneAndUpdate(
    {
      doctorId: doctorData?._id,
      _id: id,
    },
    payload,
    {
      new: true,
    }
  );
  if (!updateService) {
    throw new Error("Service not found");
  }
  return updateService;
};

const deleteService = async (id: string, doctorEmail: string) => {
  const doctorData = await Doctor.findOne({
    email: doctorEmail,
  });
  const deleteService = await Service.findOneAndDelete({
    doctorId: doctorData?._id,
    _id: id,
  });
  if (!deleteService) {
    throw new Error("Service not found");
  }
  return deleteService;
};

export const ServiceService = {
  addService,
  updateService,
  deleteService,
  getMyServices,
};
