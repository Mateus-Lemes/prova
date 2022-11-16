import { Request, Response } from "express";
import  { createModulesService, getModulesNoAuthService, getModulesService } from "../Services/modulesServices.js";

export async function createModulesController(req: Request, res: Response ) {
    const {body} = req;

    await createModulesService(body);

    res.sendStatus(201);
}

export async function getModulesController(req: Request, res: Response) {

    const body = await getModulesService()

    res.status(200).send(body)
}

export async function getModulesNoAuthController(req: Request, res: Response) {

    const body = await getModulesNoAuthService()

    res.status(200).send(body)
}