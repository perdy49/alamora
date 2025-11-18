import db from "../config/db.js";

export const adminLogin = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ message: "Name, email, and password are required" });
  }

  try {
    const [rows] = await db.query(
      "SELECT * FROM admins WHERE email = ? AND name = ?",
      [email, name]
    );

    if (rows.length === 0) {
      return res
        .status(401)
        .json({ message: "Admin not found or wrong name/email" });
    }

    const admin = rows[0];

    if (admin.password !== password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    res.json({
      message: "Login success",
      admin
    });
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: "Server error" });
  }
};
