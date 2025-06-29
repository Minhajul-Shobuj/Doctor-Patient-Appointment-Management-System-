import express from 'express';
import { DoctorController } from './doctor.controller';

const router = express.Router();

router.get('/', DoctorController.getAllDoctors);

router.get('/:id', DoctorController.getDoctorById);

export const DoctorRoute = router;
