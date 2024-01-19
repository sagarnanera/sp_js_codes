const User = require("../models/user.model");
const { genJWTToken } = require("../services/jwtService");
const {
  registerValidator,
  loginValidator
} = require("../validators/auth.validator");
const { hashPassword, compareHash } = require("../services/passwordService");

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
  try {
    // console.log("login request : ", req.body)
    const { error } = loginValidator.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }
    // console.log("login error : ",error)

    const { email, password } = req.body;

    // const user = await User.findOne({ email });
    const user = await new User().getUser({ email: email });
    // console.log("login user : ", user);

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User does not exist." });
    }

    const isMatch = await compareHash(password, user.password);
    // console.log(user, password, isMatch);
    if (isMatch) {
      const payload = {
        _id: user._id
      };

      // Sign token
      const token = genJWTToken(payload);

      const { password, ...userData } = user;

      res.status(200).cookie("token", token, CookieOptions).json({
        success: true,
        message: "logged in successfully",
        user: userData
      });
    } else {
      return res
        .status(400)
        .json({ success: false, message: "Invalid Credentials !!!" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.Register = async (req, res) => {
  try {
    const { error } = registerValidator.validate(req.body);

    if (error) {
      return res
        .status(400)
        .json({ success: false, message: error.details[0].message });
    }

    const { email, password: userPass, name, organization } = req.body;

    // const user = await User.findOne({ email: email });
    // const user = await new User().getUser({ email: email });

    // if (user) {
    //   return res
    //     .status(400)
    //     .json({ success: false, message: "Email already exists" });
    // } else {
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

    // Sign token
    const token = genJWTToken(payload);

    // Update the lastLoggedInTime field
    // newUser.lastLoginIp = req.ipAddress;
    // newUser.lastLoggedInTime = Date.now();
    // await user.save();

    const { password, ...userData } = user;
    res
      .status(200)
      .cookie("token", token, CookieOptions)
      .json({
        success: true,
        message: "Registered in successfully !!!",
        user: { _id, ...userData }
      });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal server error" });
  }
};

exports.LogOut = async (req, res) => {
  try {
    // console.log("here in logout");
    res.clearCookie("token");
    res
      .status(200)
      .send({ success: "true", message: "Successfully Logged Out" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};
