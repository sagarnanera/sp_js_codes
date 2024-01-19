const User = require("../models/user.model");
const { hashPassword } = require("../services/passwordService");
const { userValidator } = require("../validators/user.validator");
// const { passwordValidator } = require("../validators/auth.validator");

exports.GetUser = async (req, res) => {
  const { _id } = req.user;
  console.log(_id);
  try {
    const user = await new User().getUserById(_id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }
    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

exports.UpdateUser = async (req, res) => {
  const { _id } = req.user;
  const { error } = userValidator.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }
  const { email, password, name, organization } = req.body;

  let hash;
  if (password) {
    hash = await hashPassword(password);
  }
  try {
    const user = await new User()
      .updateUser(_id, {
        email: email,
        password: hash,
        name,
        organization
      })
    // .select("userName email isEmailVerified");

    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }

    res.status(200).json({ success: true, user });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

exports.DeleteUser = async (req, res) => {
  const { _id } = req.user;

  try {
    const user = await User.findByIdAndDelete(_id);
    if (!user) {
      return res
        .status(404)
        .json({ success: false, message: "User not found." });
    }
    res
      .status(200)
      .json({ success: true, message: "User deleted successfully." });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      success: false,
      message: "Internal Server Error."
    });
  }
};

// exports.ResetPass = async (req, res) => {
//   const { _id } = req.user;

//   const { error } = passwordValidator.validate(req.body);

//   if (error) {
//     return res
//       .status(400)
//       .json({ success: false, message: error.details[0].message });
//   }

//   const { password } = req.body;

//   try {
//     const user = await User.findById(_id);
//     if (!user) {
//       return res
//         .status(404)
//         .json({ success: false, message: "User not found." });
//     }

//     const newHash = await hashPassword(password);

//     user.password = newHash;
//     await user.save();

//     res
//       .status(200)
//       .json({ success: true, message: "Password reset successful." });
//   } catch (error) {
//     console.log(error);
//     res.status(500).json({ success: false, message: "Internal Server Error." });
//   }
// };
