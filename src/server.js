/* eslint-env node */
import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import db from "./config/db.js";
import jwt from "jsonwebtoken";
import path from "path";

// Routes Admin
import adminRoutes from "./routes/adminRoutes.js";

// Route User
import authRoutes from "./routes/authRoutes.js";
import eventRoutes from "./routes/eventRoutes.js";


dotenv.config();
const app = express();
const PORT = process.env.PORT || 5000;

// =========================
//     MIDDLEWARE GLOBAL
// =========================
app.use(
  cors({
    origin: "http://localhost:5173",
    credentials: true
  })
);

app.use("/uploads", express.static(path.join(process.cwd(), "uploads")));

// ⚠️ BODY PARSER WAJIB sebelum routes
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// =========================
//        ROUTES
// =========================
app.use("/api/admin", adminRoutes);
app.use("/api/auth", authRoutes);
app.use("/api/events", eventRoutes);


// =========================
//        SERVER
// =========================
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});