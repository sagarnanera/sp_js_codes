const { verifyJWTToken } = require("../services/jwtService");
const User = require("../models/user.model");

const authenticate = async (req, res, next) => {
  // return async (req, res, next) => {
  const token = req.cookies?.token;

  // // console.log(req);
  // console.log(req.cookies);

  if (!token) {
    return res.status(401).json({
      success: false,
      message: "TokenExpiredError",
      specialMessage: "Not Authorized. Token not found !!!"
    });
  }

  try {
    const { _id } = verifyJWTToken(token);

    try {
      const user = await new User().getUserById(_id);
    // console.log("auth- user : ", user);
      if (!user) {
        return res.status(401).json({
          success: false,
          message: "User not found.",
          // specialMessage: "User not found."
        });
      }

      // if (!authorizedRoles.includes(user.role)) {
      //   return res.status(403).json({
      //     success: false,
      //     message: "Insufficient permissions.",
      //     user,
      //     authorizedRoles,
      //   });
      // }

      req.user = user;
      next();
    } catch (error) {
      console.log(error);
      return res
        .status(401)
        .json({ success: false, message: "Internal server error" });
    }
  } catch (error) {
    console.log(error);
    console.log("jwt token error : ", error._id);
    console.log("jwt token error : ", error.name);
    console.log("jwt token error : ", error.message);
    console.log("jwt token error : ", error.next);
    if (
      error.name == "TokenExpiredError" ||
      error.name == "JsonWebTokenError"
    ) {
      return res
        .clearCookie("token")
        .status(401)
        .json({ success: false, message: error.name });
    } else {
      return res.status(401).json({ success: false, message: error.message });
    }
  }
  // };
};


module.exports = authenticate