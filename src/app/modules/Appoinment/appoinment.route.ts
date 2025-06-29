import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AppointmentValidation } from "./appoinment.validation";
import { AppointmentController } from "./appoinment.controller";

const router = express.Router();

router.post(
  "/appointments",
  auth("user"),
  validateRequest(AppointmentValidation.createAppointmentValidation),
  AppointmentController.createAppointment
);

router.get(
  "/patient/appointments",
  auth("user"),
  AppointmentController.getAppointmentsByUser
);
router.get(
  "/doctor/appointments",
  auth("doctor"),
  AppointmentController.getAppointmentsByDoctor
);

router.patch(
  "/doctor/appointments/:id/status",
  auth("doctor"),
  validateRequest(AppointmentValidation.updateAppointmentStatusValidation),
  AppointmentController.updateAppointmentStatus
);

export const AppointmentRoute = router;
