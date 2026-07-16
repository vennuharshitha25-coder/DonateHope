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
// Organization Dashboard
router.get(
  "/organization",
  protect,
  getOrgDonations
);

// Organization Accept/Reject
router.put(
  "/:id",
  protect,
  updateDonationStatus
);
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
router.put(
  "/:id",
  protect,
  adminOnly,
  updateDonationStatus
);
export default router;