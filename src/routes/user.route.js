const express = require("express");
const {
  GetUser,
  DeleteUser,
  ResetPass,
  UpdateUser
} = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth.middleware");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");
const router = express.Router();

router
  .route("/")
  .get(authenticate, tryCatchHandler(GetUser))
  .put(authenticate, tryCatchHandler(UpdateUser))
  .delete(authenticate, tryCatchHandler(DeleteUser));
// router.route("/update-password").post(authenticate, tryCatchHandler(ResetPass));

module.exports = router;
