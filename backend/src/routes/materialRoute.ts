import { Router } from "express";
import authMiddleware from "../middleware/auth.js";
import {
    createMaterial,
    deleteMaterial,
    getMaterialByID,
    getMaterials,
    updateMaterial,
} from "../controllers/materialController.js";

const materialRouter = Router();

materialRouter.route("/").get(authMiddleware, getMaterials).post(authMiddleware, createMaterial);

materialRouter
    .route("/:id")
    .get(authMiddleware, getMaterialByID)
    .put(authMiddleware, updateMaterial)
    .delete(authMiddleware, deleteMaterial);

export default materialRouter;
