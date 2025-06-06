import { Request, Response } from "express";
import Material from "../models/materialModel.js";
import { Material as SharedMaterial } from "@mikiri/types";

type createMaterialPayload = Omit<SharedMaterial, "id" | "_id">;

// Create new material
export async function createMaterial(
    req: Request<Record<string, never>, Record<string, never>, createMaterialPayload>,
    res: Response,
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
        res.status(201).json({ success: true, material: saved });
        return;
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
        return;
    }
}

// Get all material
export async function getMaterials(
    req: Request<Record<string, never>, Record<string, never>, SharedMaterial>,
    res: Response,
): Promise<void> {
    // TODO: implement filtering
    try {
        const materials = await Material.find().sort({ postedAt: -1 });
        res.status(200).json({ success: true, materials });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}

// Get single material by ID
export async function getMaterialByID(
    req: Request<Record<string, never>, Record<string, never>, SharedMaterial>,
    res: Response,
): Promise<void> {
    try {
        const material = await Material.findOne({ _id: req.params.id });
        if (!material) {
            res.status(404).json({ success: false, message: "Material not found" });
            return;
        }

        res.status(200).json({ success: true, material });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}

// Update material
export async function updateMaterial(
    req: Request<Record<string, never>, Record<string, never>, SharedMaterial>,
    res: Response,
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

        res.status(200).json({ success: true, material: updated });
        return;
    } catch (err) {
        console.log(err);
        res.status(400).json({ success: false, message: err.message });
        return;
    }
}

interface deleteMaterialParams {
    id: string;
}

// Delete material
export async function deleteMaterial(req: Request<deleteMaterialParams>, res: Response): Promise<void> {
    try {
        const deleted = await Material.findOneAndDelete({ _id: req.params.id });
        if (!deleted) {
            res.status(404).json({ success: false, message: "Material not found" });
            return;
        }

        res.json(200).json({ success: true, message: "Task deleted" });
        return;
    } catch (err) {
        console.log(err);
        res.status(500).json({ success: false, message: err.message });
        return;
    }
}
