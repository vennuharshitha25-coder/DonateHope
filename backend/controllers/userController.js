import User from "../models/User.js";

export const getApprovedOrganizations = async (req, res) => {
  try {
    const organizations = await User.find({
      role: "organization",
      approvalStatus: "Approved",
    }).select("-password");

    res.status(200).json(organizations);
  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};