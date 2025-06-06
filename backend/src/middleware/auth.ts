import { verify, JwtPayload } from "jsonwebtoken";
import User from "../models/userModel.js";
import { NextFunction, Request, Response } from "express";
import { ParamsDictionary, Query } from "express-serve-static-core"; // Importar tipos para genéricos
import { User as SharedUser } from "@mikiri/types";
import { Types } from "mongoose";

const jwtSecretFromEnv = process.env.JWT_SECRET;
if (!jwtSecretFromEnv) {
    console.error("FATAL ERROR: JWT_SECRET is not defined in environment variables.");
    process.exit(1);
}
const JWT_SECRET: string = jwtSecretFromEnv;

export interface AuthenticatedRequest<
    P = ParamsDictionary,
    ResBody = unknown,
    ReqBody = unknown,
    ReqQuery = Query,
    Locals extends Record<string, unknown> = Record<string, unknown>,
> extends Request<P, ResBody, ReqBody, ReqQuery, Locals> {
    user?: Pick<SharedUser, "id" | "name" | "email">;
}

interface UserDocumentFromDb {
    _id: Types.ObjectId;
    name: string;
    email: string;
}

export default async function authMiddleware(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        res.status(401).json({ success: false, message: "Not Authorized, token missing." });
        return;
    }

    const token = authHeader.split(" ")[1];

    try {
        const payload = verify(token, JWT_SECRET) as JwtPayload;
        
        const userDoc = await User.findById(payload.id).select("-password") as UserDocumentFromDb | null;

        if (!userDoc) {
            res.status(401).json({ success: false, message: "User not found." });
            return;
        }

        req.user = {
            id: userDoc._id.toString(),
            name: userDoc.name,
            email: userDoc.email,
        };
        next();
    } catch (err) {
        console.log("JWT Verification failed ", err);
        res.status(401).json({ success: false, message: "Token invalid or expired." });
        return;
    }
}
