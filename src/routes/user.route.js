const express = require("express");
const {
  GetUser,
  DeleteUser,
  ResetPass,
  UpdateUser
} = require("../controllers/user.controller");
const authenticate = require("../middlewares/auth.middleware");
const router = express.Router();

router
  .route("/")
  .get(authenticate, GetUser)
  .put(authenticate, UpdateUser)
  .delete(authenticate, DeleteUser);
// router.route("/update-password").post(authenticate, ResetPass);

module.exports = router;
