import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  name: { type: String, required: true },

  email: { type: String, required: true, unique: true },

  password: { type: String, required: true },

  phone: { type: String, required: true },

  Altphone: { type: String, required: true },

  role: {
    type: String,
    enum: ['donor', 'organization', 'admin', 'super_admin'],
    default: 'donor'
  },

  // Organization Specific Fields
  orgType: { type: String },
  contactPerson: { type: String },
  designation: { type: String },

  address: { type: String },

  city: { type: String },

  gender: { type: String },

  occupation: { type: String },

  description: { type: String },


// Organization Photos
photos: {
  type: [String],
  default: [],
},

priority: {
  type: String,
  enum: ["High", "Medium", "Low"],
  default: "Low",
},

  // 👇 ADD THIS HERE
  approvalStatus: {
    type: String,
    enum: ['Pending', 'Approved', 'Rejected'],
    default: function () {
      return this.role === 'organization'
        ? 'Pending'
        : 'Approved';
    }
},

  isAvailable: {
    type: Boolean,
    default: true
  }

}, { timestamps: true });

export default mongoose.model('User', userSchema);