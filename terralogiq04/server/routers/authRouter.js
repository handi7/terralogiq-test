const express = require("express");
const { login, keepLogin } = require("../controllers/authController");

const authRouter = express.Router();

authRouter.post("/login", login);
authRouter.post("/keep-login", keepLogin);

module.exports = authRouter;
