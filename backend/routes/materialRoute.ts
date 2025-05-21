import express from "express";
import authMiddleware from "../middleware/auth";
import { createMaterial, deleteMaterial, getMaterialByID, getMaterials, updateMaterial } from "../controllers/materialController";

const materialRouter = express.Router()

materialRouter.route('/mt')
    .get(authMiddleware, getMaterials)
    .post(authMiddleware, createMaterial)

materialRouter.route('/:id/mt')
    .get(authMiddleware, getMaterialByID)
    .put(authMiddleware, updateMaterial)
    .delete(authMiddleware, deleteMaterial)

export default materialRouter
