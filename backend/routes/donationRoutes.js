import express from "express";
import upload from "../middleware/upload.js";
import { protect, adminOnly } from "../middleware/authMiddleware.js";
import {
  createDonation,
  getPendingDonations,
  getOrgDonations,
  updateDonationStatus,
} from "../controllers/donationController.js";

const router = express.Router();

// routes...

// Donor submits donation
router.post(
  "/",
  protect,
  upload.array("photos", 5),
  createDonation
);

// Admin gets pending donations
router.get(
  "/admin",
  protect,
  adminOnly,
  getPendingDonations
);

export default router;