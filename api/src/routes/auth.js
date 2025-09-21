// 根据路由分发handler，处理对应的业务逻辑
const express = require("express");

const { register, verify, login, getUser } = require("../handlers/auth");
const response = require("../utils/response");
const { validation } = require("../handlers/validation");

const router = express.Router();

// 作为中间件，验证用户身份
router.get("/", response(validation), response(getUser));
router.post("/register", response(register));
router.post("/login", response(login));
router.put("/verify/:token", response(verify));
module.exports = router;
