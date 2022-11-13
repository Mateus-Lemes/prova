import { Router } from "express";
import { loginController, signUpController } from "../Controllers/adminControllers.js";
import { schemaValidation } from "../Middlewares/schemaValidation.js";
import { loginSchema, signupSchema } from "../Schemas/adminSchemas.js";

const adminRouters = Router();

adminRouters.post("/signup", schemaValidation(signupSchema), signUpController)
adminRouters.post("/login", schemaValidation(loginSchema), loginController)

export default adminRouters;