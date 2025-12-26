import express from "express";
import { getMe } from "../controllers/userController.js";
import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

/**
 * GET /api/users/me
 * Ambil data user dari token
 */
router.get("/me", authMiddleware, getMe);

export default router;
