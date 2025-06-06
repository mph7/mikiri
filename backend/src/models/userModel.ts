import { User as SharedUser } from "@mikiri/types";
import mongoose, { Document, Model, Schema } from "mongoose";

interface IUser extends Omit<SharedUser, "_id" | "id" | "avatar">, Document {
    password: string;
}

const userSchema: Schema<IUser> = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
    },
);

const userModel: Model<IUser> = (mongoose.models.user as Model<IUser>) || mongoose.model<IUser>("user", userSchema);

export default userModel;
