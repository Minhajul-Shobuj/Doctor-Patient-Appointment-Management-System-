import { Router } from "express";
import { UserRoute } from "../modules/User/user.route";
import { AuthRoute } from "../modules/Auth/auth.route";
import { ServiceRoute } from "../modules/Services/service.route";
import { availabilityRoute } from "../modules/Doctor_Availability/availability.route";
import { DoctorRoute } from "../modules/Doctor/doctor.route";
import { AppointmentRoute } from "../modules/Appoinment/appoinment.route";

const router = Router();

const moduleRoutes = [
  {
    path: "/auth",
    route: UserRoute,
  },
  {
    path: "/auth",
    route: AuthRoute,
  },
  {
    path: "/doctor",
    route: ServiceRoute,
  },
  {
    path: "/doctor",
    route: availabilityRoute,
  },
  {
    path: "/doctors",
    route: DoctorRoute,
  },
  {
    path: "/",
    route: AppointmentRoute,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
