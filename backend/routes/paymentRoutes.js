import express from "express";
import upload from "../middleware/upload.js";

const router = express.Router();

router.post(
  "/upload",
  upload.single("paymentScreenshot"),
  (req, res) => {

    console.log(req.file);

    res.json({
      message: "Payment screenshot uploaded successfully!"
    });
  }
);

export default router;