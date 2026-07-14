import express from "express";
import adminMiddleware from "../middleware/adminMiddleware.js";

import {
  getPendingOrganizations,
  approveOrganization,
  rejectOrganization,
} from "../controllers/adminController.js";

const router = express.Router();

// Pending Organizations
router.get(
  "/pending",
  adminMiddleware,
  getPendingOrganizations
);

router.put(
  "/approve/:id",
  adminMiddleware,
  approveOrganization
);

router.put(
  "/reject/:id",
  adminMiddleware,
  rejectOrganization
);

export default router;