import express from 'express';
import validateRequest from '../../middlewares/validateRequest';
import { ServiceValidation } from './service.validation';
import { ServiceController } from './service.controller';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/services',
  auth('doctor'),
  validateRequest(ServiceValidation.careateServiceSchema),
  ServiceController.addService,
);
router.get('/services', auth('doctor'), ServiceController.getMyServices);

router.patch(
  '/services/:id',
  auth('doctor'),
  validateRequest(ServiceValidation.updateServiceSchema),
  ServiceController.updateService,
);

router.delete('/services/:id', auth('doctor'), ServiceController.deleteService);

export const ServiceRoute = router;
