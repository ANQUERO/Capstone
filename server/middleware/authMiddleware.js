import jwt from "jsonwebtoken";
import Admin from "../models/admin.model.js";
import { getSecret } from "../utils/jwt.js";

export const protect = async (req, res, next) => {
  let token;

  // Check for token in cookie or Authorization header
  if (req.cookies?.jwt) {
    token = req.cookies.jwt;
  } else if (
    req.headers.authorization &&
    req.headers.authorization.startsWith("Bearer")
  ) {
    token = req.headers.authorization.split(" ")[1];
  }

  if (!token) {
    return res.status(401).json({ message: "Not authorized, token missing." });
  }

  try {
    const decoded = jwt.verify(token, getSecret());
    req.admin = await Admin.findById(decoded.id).select("-password");

    if (!req.admin) {
      return res.status(401).json({ message: "Admin not found." });
    }

    next();
  } catch (err) {
    console.error(err);
    res.status(403).json({ message: "Invalid or expired token." });
  }
};
