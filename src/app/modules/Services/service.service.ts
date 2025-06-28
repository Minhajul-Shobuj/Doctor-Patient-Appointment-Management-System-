import { IService } from "./service.interface";
import { Service } from "./service.model";

const addService = async (payload: IService, doctorId: any) => {
  //   const result = await Service.create(payload);
  //   return result;
};

const editService = async (id: string, payload: IService) => {};

export const ServiceService = {
  addService,
};
