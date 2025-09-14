const express = require("express");

const { register, verify, login } = require("../handlers/auth");
const response = require("../utils/response");

const router = express.Router();

router.post("/register", response(register));
router.post("/login", response(login));
router.put("/verify/:token", response(verify));
module.exports = router;
