import mongoose, { Document, Schema, Model } from "mongoose";

interface IMaterial extends Document {
    title: string;
    content: string;
    url: string;
    source: string;
    type: string;
    postedAt: Date;
    metadata: {
        difficult: string;
        length: number;
        tags: string[];
    };
}

const materialSchema: Schema<IMaterial> = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    content: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    source: {
        type: String,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    postedAt: {
        type: Date,
        required: true
    },
    metadata: {
        difficult: {
            type: String
        },
        length: {
            type: Number,
            required: true
        },
        tags: {
            type: [String]
        }
    }
    
})

const Material: Model<IMaterial> = mongoose.models.Material as Model<IMaterial> || mongoose.model<IMaterial>('Material', materialSchema)

export default Material