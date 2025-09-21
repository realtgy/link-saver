const mongoose = require("mongoose");
require("dotenv").config();

const { parseUser } = require("../utils/parse-user");
const { verifyToken } = require("../utils/crypto");
const User = mongoose.model("User");
// headers中的key是小写的？？是的，HTTP头部字段名是不区分大小写的，但在Node.js中，通常使用小写字母来访问它们。
exports.validation = async (req, res, next) => {
  const authHeader = req.headers["authorization"];
  console.log("authHeader", authHeader.split(" "));
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
    const foundUser = await User.findById(decoded.id);
    if (!foundUser) {
      return res
        .status(500)
        .json({ error: "There was an error finding the user" });
    }
    const user = foundUser.toObject();
    req.user = parseUser(user);
    req.userId = user._id;
    req.token = token;
    next();
  } catch (err) {
    return res.status(401).json({ error: "Invalid token" });
  }
};
