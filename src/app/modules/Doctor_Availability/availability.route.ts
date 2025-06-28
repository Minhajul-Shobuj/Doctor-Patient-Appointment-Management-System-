import express from "express";
import auth from "../../middlewares/auth";
import validateRequest from "../../middlewares/validateRequest";
import { AvailabilityValidation } from "./availability.validation";
import { AvailabilityController } from "./availability.controller";
const router = express.Router();

router.post(
  "/availability",
  auth("Doctor"),
  validateRequest(AvailabilityValidation.availabilitySchema),
  AvailabilityController.setAvailability
);

export const availabilityRoute = router;
