import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  phone: { type: String, required: true },
  Altphone: { type: String, required: true },
  role: { type: String, enum: ['donor', 'organization', 'admin', 'super_admin'], default: 'donor' },
  // Org Specific Fields
  orgType: { type: String },
  contactPerson: { type: String },
  designation: { type: String },
  address: {type: String},
  city: {type: String},
  gender: {type: String},
  occupation: {type: String},
  description: {type: String},
  isAvailable: { type: Boolean, default: true }
}, { timestamps: true });

export default mongoose.model('User', userSchema);