import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceService } from "./service.service";

const addService = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.addService(req.body, user?.email);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service added successfully",
    data: result,
  });
});

const updateService = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.updateService(
    req.params.id,
    req.body,
    user?.email
  );
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service updated successfully",
    data: result,
  });
});

const deleteService = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.deleteService(req.params.id, user?.email);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: "Service deleted successfully",
    data: result,
  });
});

export const ServiceController = {
  addService,
  updateService,
  deleteService,
};
