import jwt from "jsonwebtoken";
import User from "../models/User.js";

const adminMiddleware = async (req, res, next) => {
  try {
    let token;

    if (
      req.headers.authorization &&
      req.headers.authorization.startsWith("Bearer")
    ) {
      token = req.headers.authorization.split(" ")[1];

      const decoded = jwt.verify(token, process.env.JWT_SECRET);

      const user = await User.findById(decoded.id).select("-password");

      if (!user) {
        return res.status(401).json({
          message: "User not found",
        });
      }

      if (user.role !== "admin") {
        return res.status(403).json({
          message: "Access denied. Admins only.",
        });
      }

      req.user = user;

      next();
    } else {
      return res.status(401).json({
        message: "No token provided",
      });
    }
  } catch (err) {
    res.status(401).json({
      message: "Invalid token",
    });
  }
};

export default adminMiddleware;