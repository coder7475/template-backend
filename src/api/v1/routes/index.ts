// * Version one router
// parent route: /api/v1
import { Router } from 'express';

const router = Router();

const moduleRoutes = [
  {
    path: '/',
    route: '/',
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
