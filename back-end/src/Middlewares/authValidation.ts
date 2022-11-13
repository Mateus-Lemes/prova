import { NextFunction, Request, Response } from "express";
import jwt from "jsonwebtoken";
import { findByAdminId } from "../Services/adminServices.js";

export async function authValidation(req: Request, res: Response, next: NextFunction) {
    const { authorization } = req.headers;
    if (!authorization) {
        throw {
            type: "unauthorized",
            message: "Authorization header invalid or inexistent"
        }
    }

    const token = authorization.replace("Bearer ", "").trim();
    if (!token) {
        throw {
            type: "unauthorized",
            message: "Token inexistent"
        }
    }

    try {

        const secretKey = process.env.SECRET_KEY;
        const { adminId } = jwt.verify(token, secretKey) as {adminId: number};
        const admin = await findByAdminId(adminId);
        res.locals.admin = admin;

        next();

    } catch (error) {
        throw {
            type:"unauthorized",
            message: "Token invalid"
        }
    }
}