import { Request, Response } from "express";
import { signupService, loginService } from "../Services/adminServices.js";

export async function signUpController(req: Request, res: Response ) {
    const body = req.body;

    await signupService(body);

    res.sendStatus(201);
}

export async function loginController(req: Request, res: Response) {
    const body = req.body;

    const token = await loginService(body);

    res.status(200).send(token);
}