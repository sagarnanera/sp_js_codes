const { customError } = require("../handlers/error.handler");
const User = require("../models/user.model");
const { genJWTToken } = require("../services/jwtService");
const { hashPassword, compareHash } = require("../services/passwordService");
const crypto = require("crypto");

const CookieOptions = {
  expires: new Date(
    Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
  ),
  // secure: true,
  secure: false,
  httpOnly: true,
  sameSite: "none"
};

exports.Login = async (req, res) => {
  const { email, password } = req.body;

  const user = await new User().getUser({ email: email });

  if (!user) {
    res.status(404).json({ success: false, message: "User not found." });
  }

  const isMatch = await compareHash(password, user.password);

  if (!isMatch) {
    return res
      .status(400)
      .json({ success: false, message: "Invalid Credentials !!!" });
  }

  const payload = {
    _id: user._id
  };

  // Sign token
  const token = genJWTToken(payload);

  const {
    password: passwd,
    resetPasswordExpires,
    resetPasswordToken,
    ...userData
  } = user;

  return res.status(200).cookie("token", token, CookieOptions).json({
    success: true,
    message: "logged in successfully",
    user: userData
  });
};

exports.Register = async (req, res) => {
  const { email, password: userPass, name, organization } = req.body;

  const hash = await hashPassword(userPass);

  const user = new User({
    email: email,
    password: hash,
    name,
    organization
  });

  const _id = await user.save();

  const payload = {
    _id
  };

  const token = genJWTToken(payload);

  const { password, ...userData } = user;

  res
    .status(200)
    .cookie("token", token, CookieOptions)
    .json({
      success: true,
      message: "Registered in successfully !!!",
      user: { _id, ...userData }
    });
};

exports.LogOut = async (req, res) => {
  res.clearCookie("token");
  res.status(200).send({ success: "true", message: "Successfully Logged Out" });
};

// forgot pass
exports.ForgotPass = async (req, res) => {
  const { email } = req.body;

  const user = await new User().getUser({ email });

  if (!user) {
    throw new customError("User with this email does not exist.", 404);
  }

  const token = crypto.randomUUID();

  const resetPasswordToken = token;
  const resetPasswordExpires = new Date(Date.now() + 3600000);

  await new User().updateUser(user._id, {
    resetPasswordExpires,
    resetPasswordToken
  });

  const resetPassLink = `http://localhost:8080/api/auth/reset-password/${token}`;

  res.status(200).json({
    success: true,
    message: "Successfully generated reset password link.",
    resetPassLink
  });
};

exports.ResetPass = async (req, res) => {
  const { token } = req.params;
  const { password } = req.body;

  const user = await new User().getUser({
    resetPasswordToken: token,
    resetPasswordExpires: { $gt: new Date() }
  });

  if (!user) {
    throw new customError(
      "Password reset-link expired or invalid token!!",
      400
    );
  }

  const newHash = await hashPassword(password);

  await new User().updateUser(user._id, {
    password: newHash,
    resetPasswordExpires: null,
    resetPasswordToken: null
  });

  res
    .status(200)
    .json({ success: true, message: "Password reset successful." });
};
