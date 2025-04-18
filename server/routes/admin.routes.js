import express from "express";
import {
  createAdmin,
  getAdmins,
  getAdminById,
  updateAdmin,
  deleteAdmin,
  loginAdmin
} from "../controllers/admin.controller.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

// Admin login
router.post("/login", loginAdmin);

// Create new admin (could optionally be protected)
router.post("/", createAdmin);

// Get all admins (protected)
router.get("/", protect, getAdmins);

// Get single admin by id (protected)
router.get("/:adminId", protect, getAdminById);

// Update admin (protected)
router.put("/:adminId", protect, updateAdmin);

// Delete admin (protected)
router.delete("/:adminId", protect, deleteAdmin);

export default router;
