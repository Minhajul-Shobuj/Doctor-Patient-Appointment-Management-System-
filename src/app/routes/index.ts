import { Router } from "express";
import { UserRoute } from "../modules/User/user.route";
import { AuthRoute } from "../modules/Auth/auth.route";
import { ServiceRoute } from "../modules/Services/service.route";
import { availabilityRoute } from "../modules/Doctor_Availability/availability.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
