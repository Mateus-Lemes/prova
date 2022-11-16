import { Router } from "express";
import { createModulesController, getModulesController, getModulesNoAuthController } from "../Controllers/modulesControllers.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { moduleSchema } from "../Schemas/modulesSchemas.js";
import { authValidation } from "../Middlewares/authValidation.js"

const modulesRouters = Router();

modulesRouters.post("/modules", authValidation, schemaValidation(moduleSchema), createModulesController)
modulesRouters.get("/modules", authValidation, getModulesController)
modulesRouters.get("/modulesNoAuth", getModulesNoAuthController)
modulesRouters.put("/modules")
modulesRouters.delete("/modules")

export default modulesRouters;