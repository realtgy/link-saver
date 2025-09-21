const mongoose = require("mongoose");

const { generateToken } = require("../../utils/crypto");
const { parseUser } = require("../../utils/parse-user");
const User = require("../../models/user");

exports.login = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: "Email and password are required" });
  }
  const user = await User.findOne({ email });
  const isMatch = await user?.validatePassword(password);
  if (!user || !isMatch) {
    //  principle: the least knowledge of the system is the best knowledge
    return res.status(400).json({ error: "Invalid email or password" });
  }
  const token = generateToken({ id: user.id });
  res.json({ token, user: parseUser(user) });
};
