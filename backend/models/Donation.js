import mongoose from "mongoose";

const donationSchema = new mongoose.Schema(
  {
    donor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    organization: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },

    foodName: String,
    category: String,
    quantity: String,

  
    deliveryMethod: String,
    occasion: String,
    instructions: String,

    photos: [String],

    status: {
      type: String,
      enum: [
        "Pending Admin",
        "Waiting Organization",
        "Accepted",
        "Rejected",
      ],
      default: "Pending Admin",
    },

    adminVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model("Donation", donationSchema);