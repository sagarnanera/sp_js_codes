const express = require("express");
const { Login, LogOut, Register } = require("../controllers/auth.controller");
const authenticate = require("../middlewares/auth.middleware");
const validate = require("../middlewares/validate.middleware");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");
const {
  loginValidator,
  registerValidator,
  passwordValidator
} = require("../validators/auth.validator");
const { ForgotPass, ResetPass } = require("../controllers/auth.controller");
const router = express.Router();

router.route("/login").post(validate(loginValidator), tryCatchHandler(Login));
router
  .route("/register")
  .post(validate(registerValidator), tryCatchHandler(Register));

router.route("/logout").post(authenticate, tryCatchHandler(LogOut));

// forgot pass
router.route("/forgot-password").post(tryCatchHandler(ForgotPass));

router
  .route("/reset-password/:token")
  .post(validate(passwordValidator), tryCatchHandler(ResetPass));

module.exports = router;
