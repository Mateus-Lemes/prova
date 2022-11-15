import { Router } from "express";
import adminRouters from "./adminRouters.js";
import modulesRouters from "./modulesRouters.js"

const router = Router();

router.use(adminRouters);
router.use(modulesRouters);

export default router;