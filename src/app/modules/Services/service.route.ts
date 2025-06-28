import express from "express";
import validateRequest from "../../middlewares/validateRequest";
import { ServiceVAlidation } from "./service.validation";
import { ServiceController } from "./service.controller";

const router = express.Router();

router.post(
  "/services",
  validateRequest(ServiceVAlidation.careateServiceSchema),
  ServiceController.addService
);

export const ServiceRoute = router;
