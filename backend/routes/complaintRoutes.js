import express from "express";

import {
  submitComplaint,
  getComplaints,
  acceptComplaint,
  rejectComplaint,
} from "../controllers/complaintController.js";

const router = express.Router();

router.post("/", submitComplaint);

router.get("/", getComplaints);

router.put("/accept/:id", acceptComplaint);

router.put("/reject/:id", rejectComplaint);

export default router;