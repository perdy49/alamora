import { findUserById } from "../models/userModel.js";

/**
 * GET /api/users/me
 * Ambil user dari token (req.user.id)
 */
export const getMe = async (req, res) => {
  try {
    // authMiddleware akan mengisi req.user
    const userId = req.user.id;

    const user = await findUserById(userId);
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    return res.json(user);
  } catch (err) {
    console.error("GET ME ERROR:", err);
    return res.status(500).json({ msg: "Server error" });
  }
};
