exports.getUser = (req, res) => {
  const user = req.user;
  const token = req.token;
  if (!user) {
    return res.status(404).json({ error: "User not found" });
  }
  res.status(200).json({ user, token });
};
