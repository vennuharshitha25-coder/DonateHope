import mongoose from "mongoose";
import dotenv from "dotenv";
import bcrypt from "bcryptjs";

import User from "./models/User.js";

dotenv.config();

const createAdmin = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);

    const exists = await User.findOne({
      email: "admin@donatehope.com",
    });

    if (exists) {
      console.log("Admin already exists.");
      process.exit();
    }

    const hashedPassword = await bcrypt.hash("admin123", 10);

    await User.create({
      name: "Admin",
      email: "admin@donatehope.com",
      password: hashedPassword,
      phone: "9999999999",
      Altphone: "9999999999",
      role: "admin",
      approvalStatus: "Approved",
    });

    console.log("✅ Admin created successfully!");
    console.log("Email: admin@donatehope.com");
    console.log("Password: admin123");

    process.exit();

  } catch (err) {
    console.log(err);
    process.exit(1);
  }
};

createAdmin();