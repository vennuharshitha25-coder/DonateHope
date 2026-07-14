import Donation from '../models/Donation.js';

export const createDonation = async (req, res) => {
  try {
    const donation = new Donation({ ...req.body, donor: req.user.id });
    await donation.save();
    res.status(201).json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const getOrgDonations = async (req, res) => {
  try {
    const donations = await Donation.find({ organization: req.user.id }).populate('donor', 'name email phone');
    res.json(donations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateDonationStatus = async (req, res) => {
  try {
    const donation = await Donation.findByIdAndUpdate(req.params.id, { status: req.body.status }, { new: true });
    res.json(donation);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};