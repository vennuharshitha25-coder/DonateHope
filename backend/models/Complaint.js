import mongoose from "mongoose";

const complaintSchema = new mongoose.Schema(
  {
    name: String,

    email: String,

    complaint: String,

    status: {
      type: String,
      enum: ["Pending", "Accepted", "Rejected"],
      default: "Pending",
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Complaint", complaintSchema);