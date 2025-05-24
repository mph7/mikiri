import Material from "../models/materialModel";

// Create new material
export async function createMaterial(req, res) {
    try {
        const { title, content, url, source, type, postedAt, metadata } = req.body

        const material = new Material({
            title,
            content,
            url,
            source,
            type,
            postedAt,
            metadata,
        })

        const saved = await material.save()
        return res.status(201).json({ success: true, material: saved })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, message: err.message })
    }
}

// Get all material
export async function getMaterials(req, res) {
    // TODO: implement filtering
    try {
        const materials = await Material.find().sort({ postedAt: -1 })
        return res.status(200).json({ success: true, material: materials })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message })
    }
}

// Get single material by ID
export async function getMaterialByID(req, res) {
    try {
        const material = await Material.findOne({ _id: req.params.id })
        if (!material) return res.status(404).json({ success: false, message: "Material not found" })

        return res.status(200).json({ success: true, material })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message })
    }
}

// Update material
export async function updateMaterial(req, res) {
    try {
        const data = { ...req.body }
        const updated = await Material.findOneAndUpdate(
            { _id: req.params.id },
            data,
            { new: true, runValidators: true }
        )
        if (!updated) return res.status(404).json({ success: false, message: "Material not found" })

        return res.status(200).json({ success: true, material: updated })
    } catch (err) {
        console.log(err);
        return res.status(400).json({ success: false, message: err.message })
    }

}

// Delete material
export async function deleteMaterial(req, res) {
    try {
        const deleted = await Material.findOneAndDelete({ _id: req.params.id })
        if (!deleted) return res.status(404).json({ success: false, message: "Material not found" })

        return res.json(200).json({ success: true, message: "Task deleted" })
    } catch (err) {
        console.log(err);
        return res.status(500).json({ success: false, message: err.message })
    }
}