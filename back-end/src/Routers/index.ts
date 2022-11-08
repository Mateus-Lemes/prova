import { Router } from "express";
import adminRouters from "./adminRouters.js";

const router = Router();

router.use(adminRouters);

export default router;