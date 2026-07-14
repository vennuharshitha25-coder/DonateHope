import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  donor: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  organization: { type: mongoose.Schema.Types.ObjectId, ref: 'User' }, // Empty if "Any"
  allocationType: { type: String, enum: ['specific', 'any'], default: 'any' },
  type: { type: String, enum: ['Food', 'Money'], required: true },
  // Food Details
  foodDetails: {
    items: String,
    quantity: String,
    expiryTime: String
  },
  // Money Details
  amount: { type: Number },
  moneyAllocation: { type: String, enum: ['orgs', 'platform', 'both'], default: 'both' },
  deliveryMethod: { type: String, enum: ['Self Delivery', 'Pickup Service'] },
  status: { type: String, enum: ['Pending', 'Accepted', 'Rejected', 'Pickup Started', 'On the Way', 'Delivered'], default: 'Pending' }
}, { timestamps: true });

export default mongoose.model('Donation', donationSchema);