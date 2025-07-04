import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { ServiceService } from './service.service';
import { RequestHandler } from 'express';

const addService: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.addService(req.body, user?.email);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Service added successfully',
    data: result,
  });
});
const getMyServices: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.getMyServices(user?.email);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Services retrieved successfully',
    data: result,
  });
});

const updateService: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.updateService(req.params.id, req.body, user?.email);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service updated successfully',
    data: result,
  });
});

const deleteService: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await ServiceService.deleteService(req.params.id, user?.email);
  sendResponse(res, {
    statusCode: status.OK,
    success: true,
    message: 'Service deleted successfully',
    data: result,
  });
});

export const ServiceController = {
  addService,
  updateService,
  deleteService,
  getMyServices,
};
