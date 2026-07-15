import Donation from "../models/Donation.js";

// Create Donation
export const createDonation = async (req, res) => {
  try {
    const donation = await Donation.create({
      donor: req.user.id,

      organization: req.body.organization,

      foodName: req.body.foodName,
      category: req.body.category,
      quantity: req.body.quantity,
      occasion: req.body.occasion,
      instructions: req.body.instructions,

      photos: req.files
        ? req.files.map(file => file.filename)
        : [],

      status: "Pending Admin",
    });

    res.status(201).json(donation);

  } catch (err) {
    console.log(err);
    res.status(500).json({
      message: err.message,
    });
  }
};
// Admin - Get Pending Donations
export const getPendingDonations = async (req, res) => {
  try {
    const donations = await Donation.find()
      .populate("donor", "name email phone")
      .populate("organization", "name email phone");

    res.json(donations);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
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