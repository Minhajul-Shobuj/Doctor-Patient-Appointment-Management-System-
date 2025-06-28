import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { DoctorValidation } from "../Doctor/doctor.validation";
import { UserController } from "./user.controller";

const router = express.Router();

router.post(
  "/register-doctor",
  validateRequest(DoctorValidation.createDoctorSchema),
  UserController.createDoctor
);

export const UserRoute = router;
