import Complaint from "../models/Complaint.js";

// Submit Complaint
export const submitComplaint = async (req, res) => {
  try {
    const complaint = await Complaint.create(req.body);

    res.status(201).json({
      message: "Complaint submitted successfully.",
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

// Get All Complaints
export const getComplaints = async (req, res) => {
  try {

    const complaints = await Complaint.find().sort({
      createdAt: -1,
    });

    res.json(complaints);

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }
};

// Accept Complaint
export const acceptComplaint = async (req, res) => {

  const complaint =
    await Complaint.findById(req.params.id);

  complaint.status = "Accepted";

  await complaint.save();

  res.json({
    message: "Complaint Accepted",
  });
};

// Reject Complaint
export const rejectComplaint = async (req, res) => {

  const complaint =
    await Complaint.findById(req.params.id);

  complaint.status = "Rejected";

  await complaint.save();

  res.json({
    message: "Complaint Rejected",
  });
};