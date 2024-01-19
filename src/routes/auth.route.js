const express = require("express");
const { Login, LogOut, Register } = require("../controllers/auth.controller");
const authenticate = require("../middlewares/auth.middleware");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");
const router = express.Router();

router.route("/login").post(tryCatchHandler(Login));
router.route("/register").post(tryCatchHandler(Register));

// protected routes
router.route("/logout").post(authenticate, tryCatchHandler(LogOut));

module.exports = router;
