import mongoose, { Document, Schema, Model } from "mongoose";
import { Material as SharedMaterial } from "@mikiri/types";

interface IMaterial extends Omit<SharedMaterial, "_id" | "id">, Document {}

const materialSchema: Schema<IMaterial> = new mongoose.Schema(
    {
        title: {
            type: String,
            required: true,
        },
        content: {
            type: String,
            required: true,
        },
        url: {
            type: String,
            required: true,
        },
        source: {
            type: String,
            required: true,
        },
        type: {
            type: String,
            required: true,
        },
        postedAt: {
            type: Date,
            required: true,
        },
        metadata: {
            difficulty: {
                type: String,
            },
            length: {
                type: Number,
                required: true,
            },
            tags: {
                type: [String],
            },
        },
    },
    {
        timestamps: true,
    },
);

const Material: Model<IMaterial> =
    (mongoose.models.Material as Model<IMaterial>) || mongoose.model<IMaterial>("Material", materialSchema);

export default Material;
