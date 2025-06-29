import status from 'http-status';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { AvailabilityService } from './availability.service';
import { RequestHandler } from 'express';

const setAvailability: RequestHandler = catchAsync(async (req, res) => {
  const user = req.user;
  const result = await AvailabilityService.setAvailability(req.body, user?.email);
  sendResponse(res, {
    statusCode: status.CREATED,
    success: true,
    message: 'Availability set successfully',
    data: result,
  });
});

export const AvailabilityController = {
  setAvailability,
};
