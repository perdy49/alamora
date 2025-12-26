import express from "express";
import {
  getAllEvents,
  getPublicEvents,
  createEvent,
  updateEvent,
  deleteEvent,
  getEventById
} from "../controllers/eventController.js";
import authMiddleware from "../middleware/authMiddleware.js";
import { upload } from "../middleware/upload.js";

const router = express.Router();

// GET
router.get("/", getAllEvents);
router.get("/public", getPublicEvents);
router.get("/:id", getEventById);


// POST + UPLOAD + AUTH
router.post("/", authMiddleware, upload.single("image"), createEvent);

// PUT + UPLOAD + AUTH
router.put("/:id", authMiddleware, upload.single("image"), updateEvent);

// DELETE
router.delete("/:id", authMiddleware, deleteEvent);

export default router;
