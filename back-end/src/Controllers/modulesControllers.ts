import { Request, Response } from "express";
import  { createModulesService } from "../Services/modulesServices.js";

export async function createModulesController(req: Request, res: Response ) {
    const {body} = req;

    await createModulesService(body);

    res.sendStatus(201);
}