import User from '../models/User.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const generateToken = (id) => jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '7d' });

export const registerUser = async (req, res) => {
  const {
    name,
    email,
    password,
    phone,
    Altphone,
    role,
    orgType,
    contactPerson,
    designation,
    address,
    city,
    gender,
    occupation,
    description
  } = req.body;

  try {
    const exists = await User.findOne({ email });

    if (exists)
      return res.status(400).json({
        message: "User already exists",
      });

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const user = await User.create({
      name,
      email,
      password: hashedPassword,
      phone,
      Altphone,
      role,
      orgType,
      contactPerson,
      designation,
      address,
      city,
      gender,
      occupation,
      description,
      approvalStatus:
        role === "organization"
          ? "Pending"
          : "Approved",
    });

    if (role === "organization") {
      return res.status(201).json({
        message:
          "Registration successful. Your organization is awaiting admin approval.",
      });
    }

    res.status(201).json({
      token: generateToken(user._id),
      user,
    });

  } catch (err) {
    res.status(500).json({
      message: err.message,
    });
  }
};

export const loginUser = async (req, res) => {

  const { email, password } = req.body;

  try {

    const user = await User.findOne({ email });

    if (!user)
      return res.status(400).json({
        message: "Invalid credentials",
      });

    const match = await bcrypt.compare(
      password,
      user.password
    );

    if (!match)
      return res.status(400).json({
        message: "Invalid credentials",
      });

    if (
      user.role === "organization" &&
      user.approvalStatus !== "Approved"
    ) {
      return res.status(403).json({
        message:
          "Your organization is awaiting admin approval.",
      });
    }

    res.json({
      token: generateToken(user._id),
      user,
    });

  } catch (err) {

    res.status(500).json({
      message: err.message,
    });

  }

};