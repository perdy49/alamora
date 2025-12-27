// import express from "express";
// import { getMe } from "../controllers/userController.js";
// import authMiddleware from "../middleware/authMiddleware.js";

// const router = express.Router();

// /**
//  * GET /api/users/me
//  * Ambil data user dari token
//  */
// router.get("/me", authMiddleware, getMe);

// export default router;

import express from "express";
import authMiddleware from "../middleware/authMiddleware.js";
import { getMe, updateMe } from "../controllers/userController.js";

const router = express.Router();

router.get("/me", authMiddleware, getMe);
router.put("/me", authMiddleware, updateMe);

export default router;
