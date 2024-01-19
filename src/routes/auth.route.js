const express = require("express");
const { Login, LogOut, Register } = require("../controllers/auth.controller");
const authenticate = require("../middlewares/auth.middleware");
const router = express.Router();

router.route("/login").post(Login);
router.route("/register").post(Register);

// protected routes
router.route("/logout").post(authenticate, LogOut);

module.exports = router;
