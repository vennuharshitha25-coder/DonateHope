import express from "express";
import { getApprovedOrganizations } from "../controllers/userController.js";

const router = express.Router();

router.get("/organizations", getApprovedOrganizations);

export default router;