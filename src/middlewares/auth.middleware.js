const { verifyJWTToken } = require("../services/jwtService");
const User = require("../models/user.model");
const { customError } = require("../handlers/error.handler");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");

const authenticate = tryCatchHandler(async (req, res, next) => {
  const token = req.cookies?.token;

  if (!token) {
    throw new customError("Not Authorized. Token not found !!!", 401);
  }

  const { _id } = verifyJWTToken(token);

  const user = await new User().getUserById(_id);

  if (!user) {
    throw new customError("User not found.", 401);
  }

  req.user = user;
  next();
});

module.exports = authenticate;
