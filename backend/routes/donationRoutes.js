import express from 'express';
import { createDonation, getOrgDonations, updateDonationStatus } from '../controllers/donationController.js';
import { protect } from '../middleware/authMiddleware.js';
const router = express.Router();

router.post('/', protect, createDonation);
router.get('/org', protect, getOrgDonations);
router.put('/:id', protect, updateDonationStatus);

export default router;