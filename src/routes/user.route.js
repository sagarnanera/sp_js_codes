const express = require("express");
const {
  GetUser,
  DeleteUser,
  UpdateUser
} = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth.middleware");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");
const validate = require("../middlewares/validate.middleware");
const { userValidator } = require("../validators/user.validator");
require("../validators/auth.validator");
const router = express.Router();

router
  .route("/")
  .get(authenticate, tryCatchHandler(GetUser))
  .put(authenticate, validate(userValidator), tryCatchHandler(UpdateUser))
  .delete(authenticate, tryCatchHandler(DeleteUser));

module.exports = router;
