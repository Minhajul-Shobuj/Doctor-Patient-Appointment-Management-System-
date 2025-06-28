import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { DoctorValidation } from "../Doctor/doctor.validation";
import { UserController } from "./user.controller";
import { UserValidation } from "./user.validation";

const router = express.Router();

router.post(
  "/register-user",
  validateRequest(UserValidation.createUserSchemaValidation),
  UserController.createUser
);
router.post(
  "/register-doctor",
  validateRequest(DoctorValidation.createDoctorSchema),
  UserController.createDoctor
);

export const UserRoute = router;
