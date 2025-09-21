require("dotenv/config");
const bcrypt = require("bcryptjs");
const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const salt = bcrypt.genSaltSync(12);

// Generate a hash for a password
exports.generateHash = (password) => {
  const hashedPassword = bcrypt.hashSync(password, salt);
  return hashedPassword;
};

// Generate a JWT token
// 这里只是对id进行了签名
exports.generateToken = (user) => {
  const token = jwt.sign(
    {
      id: user.id,
    },
    process.env.JWT_SECRET,
    {
      expiresIn: "7d",
      algorithm: "HS256",
    }
  );

  return token;
};

// Verify a JWT token
exports.verifyToken = (token) => {
  return new Promise((resolve, reject) => {
    jwt.verify(
      token,
      process.env.JWT_SECRET,
      { algorithms: ["HS256"] },
      (err, decoded) => {
        if (err) return reject(err);
        resolve(decoded);
      }
    );
  });
};

// Generate a random hash for email validation
exports.generateCryptoToken = () => crypto.randomBytes(32).toString("hex");
