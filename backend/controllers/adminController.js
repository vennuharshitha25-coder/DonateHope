import User from "../models/User.js";

// Get all pending organizations
export const getPendingOrganizations = async (req, res) => {
  try {
    const organizations = await User.find({
      role: "organization",
      approvalStatus: "Pending",
    }).select("-password");

    res.status(200).json(organizations);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Approve organization
export const approveOrganization = async (req, res) => {
  try {
    const organization = await User.findById(req.params.id);

    if (!organization) {
      return res.status(404).json({
        message: "Organization not found",
      });
    }

    organization.approvalStatus = "Approved";

    await organization.save();

    res.json({
      message: "Organization approved successfully.",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Reject organization
export const rejectOrganization = async (req, res) => {

  try {

    const organization = await User.findById(req.params.id);

    if (!organization) {
      return res.status(404).json({
        message: "Organization not found",
      });
    }

    organization.approvalStatus = "Rejected";

    await organization.save();

    res.json({
      message: "Organization rejected successfully.",
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};