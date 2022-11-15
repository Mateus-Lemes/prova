import { Router } from "express";
import { createModulesController } from "../Controllers/modulesControllers.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { moduleSchema } from "../Schemas/modulesSchemas.js";
import { authValidation } from "../Middlewares/authValidation.js"

const modulesRouters = Router();

modulesRouters.post("/modules", authValidation, schemaValidation(moduleSchema), createModulesController)
modulesRouters.get("/modules")
modulesRouters.put("/modules")
modulesRouters.delete("/modules")

export default modulesRouters;