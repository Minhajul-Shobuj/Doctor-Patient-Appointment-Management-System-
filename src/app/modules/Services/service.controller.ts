import status from "http-status";
import catchAsync from "../../utils/catchAsync";
import sendResponse from "../../utils/sendResponse";
import { ServiceService } from "./service.service";

const addService = catchAsync(async (req, res) => {
  const result = await ServiceService.addService(req.body, req.user);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: "Service added successfully",
    data: result,
  });
});

export const ServiceController = {
  addService,
};
