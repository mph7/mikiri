import { Request, Response } from "express";
import Material from "../models/materialModel.js";
import { DeleteMaterialResponse, MaterialResponse, MaterialsResponse, Material as SharedMaterial } from "@mikiri/types";
import {} from "mongoose";

function convertToMaterialResponse(materialDoc: any): SharedMaterial {
    return {
        _id: (materialDoc._id as any).toString(),
        title: materialDoc.title,
        content: materialDoc.content,
        url: materialDoc.url,
        source: materialDoc.source,
        type: materialDoc.type,
        postedAt: materialDoc.postedAt,
        metadata: materialDoc.metadata,
    };
}

type createMaterialPayload = Omit<SharedMaterial, "id" | "_id">;

// Create new material
export async function createMaterial(
    req: Request<Record<string, never>, Record<string, never>, createMaterialPayload>,
    res: Response<MaterialResponse>,
): Promise<void> {
    try {
        const { title, content, url, source, type, postedAt, metadata } = req.body;

        const material = new Material({
            title,
            content,
            url,
            source,
            type,
            postedAt,
            metadata,
        });

        const saved = await material.save();
        res.status(201).json({ success: true, material: convertToMaterialResponse(saved) });
        return;
    } catch (err: any) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
        return;
    }
}

// Get all material
export async function getMaterials(req: Request, res: Response<MaterialsResponse>): Promise<void> {
    // TODO: implement filtering
    try {
        const materials = await Material.find().sort({ postedAt: -1 });
        const mappedMaterials: SharedMaterial[] = materials.map((material) => convertToMaterialResponse(material));
        res.status(200).json({ success: true, materials: mappedMaterials });
        return;
    } catch (err: any) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}

interface MaterialIDParams {
    id: string;
}

// Get single material by ID
export async function getMaterialByID(
    req: Request<MaterialIDParams, Record<string, never>, SharedMaterial>,
    res: Response<MaterialResponse>,
): Promise<void> {
    try {
        const material = await Material.findOne({ _id: req.params.id });
        if (!material) {
            res.status(404).json({ success: false, message: "Material not found" });
            return;
        }

        res.status(200).json({ success: true, material: convertToMaterialResponse(material) });
        return;
    } catch (err: any) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}

// Update material
export async function updateMaterial(
    req: Request<MaterialIDParams, Record<string, never>, SharedMaterial>,
    res: Response<MaterialResponse>,
): Promise<void> {
    try {
        const data = { ...req.body };
        const updated = await Material.findOneAndUpdate({ _id: req.params.id }, data, {
            new: true,
            runValidators: true,
        });
        if (!updated) {
            res.status(404).json({ success: false, message: "Material not found" });
            return;
        }

        res.status(200).json({ success: true, material: convertToMaterialResponse(updated) });
        return;
    } catch (err: any) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
        return;
    }
}

// Delete material
export async function deleteMaterial(
    req: Request<MaterialIDParams>,
    res: Response<DeleteMaterialResponse>,
): Promise<void> {
    try {
        const deleted = await Material.findOneAndDelete({ _id: req.params.id });
        if (!deleted) {
            res.status(404).json({ success: false, message: "Material not found." });
            return;
        }

        res.status(200).json({ success: true, message: "Material deleted." });
        return;
    } catch (err: any) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}
