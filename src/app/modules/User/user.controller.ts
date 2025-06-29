import { RequestHandler } from 'express';
import catchAsync from '../../utils/catchAsync';
import sendResponse from '../../utils/sendResponse';
import { UserService } from './user.service';

const createUser: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.createUser(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'User created successfully',
    data: result,
  });
});

const createDoctor: RequestHandler = catchAsync(async (req, res) => {
  const result = await UserService.createDoctor(req.body);
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Doctor created successfully',
    data: result,
  });
});

export const UserController = {
  createDoctor,
  createUser,
};
