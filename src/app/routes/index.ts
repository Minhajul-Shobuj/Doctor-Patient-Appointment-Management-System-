import { Router } from "express";
import { UserRoute } from "../modules/User/user.route";
import { AuthRoute } from "../modules/Auth/auth.route";

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
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
