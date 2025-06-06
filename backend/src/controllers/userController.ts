import User from "../models/userModel.js";
import validator from "validator";
import { compare, hash } from "bcrypt";
import jsonwebtoken from "jsonwebtoken";
import { Request, Response } from "express";
import { AuthResponse, GetCurrentUserResponse, UpdatePasswordResponse, UpdateProfileResponse } from "@mikiri/types";
import { Document, Types } from "mongoose";
import { AuthenticatedRequest } from "../middleware/auth.js";

const JWT_SECRET = process.env.JWT_SECRET;
if (!JWT_SECRET) {
    console.error("FATAL ERROR: JWT_SECRET is not defined in environment variables.");
}
const TOKEN_EXPIRES = "24h";

const { isEmail } = validator;
const { sign } = jsonwebtoken;

const createToken = (userId: string) => sign({ id: userId }, JWT_SECRET, { expiresIn: TOKEN_EXPIRES });

interface UserDocument extends Document {
    _id: Types.ObjectId;
    name: string;
    email: string;
    password?: string;
}

interface RegisterUserPayload {
    name: string;
    email: string;
    password: string;
}

export async function registerUser(
    req: Request<Record<string, never>, Record<string, never>, RegisterUserPayload>,
    res: Response<AuthResponse>,
): Promise<void> {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        res.status(400).json({ success: false, message: "All fields are required." });
        return;
    }
    if (!isEmail(email)) {
        res.status(400).json({ success: false, message: "Invalid email." });
        return;
    }
    if (password.length < 8) {
        res.status(400).json({ success: false, message: "Password must be at least 8 characters long." });
        return;
    }

    try {
        if (await User.findOne({ email })) {
            res.status(409).json({ success: false, message: "User already exists." });
            return;
        }

        const hashed = await hash(password, 10);
        const user: UserDocument = (await User.create({ name, email, password: hashed })) as UserDocument;
        const token = createToken(user._id.toString());

        res.status(201).json({
            success: true,
            token,
            user: { id: user._id.toString(), name: user.name, email: user.email },
        });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error." });
        return;
    }
}

interface LoginUserPayload {
    email: string;
    password: string;
}

export async function loginUser(
    req: Request<Record<string, never>, Record<string, never>, LoginUserPayload>,
    res: Response<AuthResponse>,
): Promise<void> {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(400).json({ success: false, message: "Email and password are required." });
        return;
    }

    try {
        const user = (await User.findOne({ email })) as UserDocument | null;
        if (!user) {
            res.status(401).json({ success: false, message: "Invalid credentials." });
            return;
        }
        if (!user.password) {
            console.error(`Password not found for user: ${user.email}`);
            res.status(500).json({ success: false, message: "Error processing login." });
            return;
        }
        const match = await compare(password, user.password);

        if (!match) {
            res.status(401).json({ success: false, message: "Invalid credentials." });
            return;
        }

        const token = createToken(user._id.toString());
        res.json({ success: true, token, user: { id: user._id.toString(), name: user.name, email: user.email } });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error." });
        return;
    }
}

interface GetCurrentUserPayload {
    id: string;
}

export async function getCurrentUser(
    req: AuthenticatedRequest<Record<string, never>, Record<string, never>, GetCurrentUserPayload>,
    res: Response<GetCurrentUserResponse>,
): Promise<void> {
    try {
        if (!req.user || !req.user.id) {
            res.status(401).json({ success: false, message: "User not authenticated." });
            return;
        }
        const userDoc = (await User.findById(req.user.id).select("name email _id")) as UserDocument | null;
        if (!userDoc) {
            res.status(404).json({ success: false, message: "User not found." }); // 404 is more appropriate
            return;
        }
        res.json({ success: true, user: { id: userDoc._id.toString(), name: userDoc.name, email: userDoc.email } });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error." });
        return;
    }
}

interface UpdateProfilePayload {
    name: string;
    email: string;
}

export async function updateProfile(
    req: AuthenticatedRequest<Record<string, never>, Record<string, never>, UpdateProfilePayload>,
    res: Response<UpdateProfileResponse>,
): Promise<void> {
    const { name, email } = req.body;

    if (!name || !email || !isEmail(email)) {
        res.status(400).json({ success: false, message: "Valid name and email are required." });
        return;
    }
    if (!req.user || !req.user.id) {
        res.status(401).json({ success: false, message: "User not authenticated." });
        return;
    }

    try {
        const userId = req.user.id;
        const exists = await User.findOne({ email, _id: { $ne: userId } });

        if (exists) {
            res.status(409).json({ success: false, message: "Email already in use by another account." });
            return;
        }
        const updatedUserDoc = (await User.findByIdAndUpdate(
            userId,
            { name, email },
            { new: true, runValidators: true, select: "name email _id" }, // select _id for response mapping
        )) as UserDocument | null;

        if (!updatedUserDoc) {
            res.status(404).json({ success: false, message: "User not found for update." });
            return;
        }
        res.json({
            success: true,
            user: { id: updatedUserDoc._id.toString(), name: updatedUserDoc.name, email: updatedUserDoc.email },
        });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error." });
        return;
    }
}

interface UpdatePasswordPayload {
    currentPassword: string;
    newPassword: string;
}

export async function updatePassword(
    req: AuthenticatedRequest<Record<string, never>, Record<string, never>, UpdatePasswordPayload>, // Use AuthenticatedRequest
    res: Response<UpdatePasswordResponse>,
): Promise<void> {
    const { currentPassword, newPassword } = req.body;

    if (!currentPassword || !newPassword || newPassword.length < 8) {
        res.status(400).json({
            success: false,
            message: "Current password and new password (min 8 chars) are required.",
        });
        return;
    }

    if (!req.user || !req.user.id) {
        res.status(401).json({ success: false, message: "User not authenticated." });
        return;
    }

    try {
        const userDoc = (await User.findById(req.user.id).select("+password")) as UserDocument | null; // Explicitly select password

        if (!userDoc || !userDoc.password) {
            res.status(404).json({ success: false, message: "User not found or password not available." });
            return;
        }

        const match = await compare(currentPassword, userDoc.password);

        if (!match) {
            res.status(401).json({ success: false, message: "Current password incorrect." });
            return;
        }

        userDoc.password = await hash(newPassword, 10);
        await userDoc.save();
        res.json({ success: true, message: "Password changed." });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: "Server error." });
        return;
    }
}
