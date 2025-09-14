const mongoose = require("mongoose");
const User = require("../../models/user");
const Token = mongoose.model("Token");

exports.verify = async (req, res) => {
  const { token } = req.params;
  const tokenDoc = await Token.findOne({ token });
  if (!tokenDoc) {
    res.status(400).send({ error: "Invalid token" });
    return;
  }

  const user = await User.findOneAndUpdate(
    { _id: tokenDoc.user },
    { verified: true }
  );
  if (!user) {
    res.status(500).send({ error: "Failed to verify user!" });
    return;
  }
  res.status(200).send({
    isVerified: true,
    message: "User verified successfully",
  });
};
