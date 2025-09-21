const mongoose = require("mongoose");
require("dotenv").config();

const { parseUser } = require("../utils/parse-user");
const { verifyToken } = require("../utils/crypto");
const User = mongoose.model("User");

exports.validate = async (req, res, next) => {
  const authHeader = req.headers["Authorization"];
  if (!authHeader) {
    return res.status(403).json({ error: "No token provided" });
  }
  //  grab the token from the auth header;
  const token = authHeader.split(" ")[1];
  if (!token) {
    return res.status(403).json({ error: "No token provided" });
  }

  try {
    const decoded = await verifyToken(token);
    const user = await User.findById(decoded.userId);
    if (!user) {
      return res.status(500).json({ error: "Invalid token" });
    }
    // validated user, attach to req object
    req.user = parseUser(user);
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
