import express from 'express';
import { registerUser, loginUser }  from '../controllers/authController.js';
import upload from "../middleware/upload.js";
const router = express.Router();
router.post(
  "/register",
  upload.array("photos", 10),
  registerUser
);
router.post('/login', loginUser);

export default router;