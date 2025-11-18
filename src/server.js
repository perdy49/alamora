/* eslint-env node */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import jwt from "jsonwebtoken";

// Routes
import adminRoutes from "./routes/adminRoutes.js";

dotenv.config();
const app = express();

// =========================
//     MIDDLEWARE GLOBAL
// =========================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

// ⚠️ BODY PARSER WAJIB sebelum routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
//        ROUTES
// =========================
app.use("/api/admin", adminRoutes);

// =========================
//     LOGIN ADMIN API
// =========================
app.post("/api/admin/login", (req, res) => {
  const { name, email, password } = req.body;

  console.log("🟢 Login attempt:", name, email, password);

  if (!email || !password) {
    return res.status(400).json({ message: "Email & password required" });
  }

  db.query("SELECT * FROM admins WHERE email = ?", [email], (err, result) => {
    if (err) return res.status(500).json({ message: "Database error" });

    if (result.length === 0) {
      return res.status(404).json({ message: "Admin not found" });
    }

    const admin = result[0];

    if (password !== admin.password) {
      return res.status(401).json({ message: "Invalid password" });
    }

    // ⚠ Update admin name jika berbeda & dikirim dari frontend
    if (name && name !== admin.name) {
      db.query(
        "UPDATE admins SET name = ? WHERE id = ?",
        [name, admin.id],
        (err2) => {
          if (err2) console.log("Name update failed:", err2);
        }
      );
    }

    // Buat JWT token
    const token = jwt.sign(
      { id: admin.id, role: admin.role },
      process.env.JWT_SECRET,
      { expiresIn: "1h" }
    );

    res.json({
      message: "Login success",
      token,
      admin: {
        id: admin.id,
        name: name || admin.name,
        email: admin.email
      }
    });
  });
});

// =========================
//        SERVER
// =========================
app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${process.env.PORT}`);
});
