const User = require("../models/user.model");
const { hashPassword } = require("../services/passwordService");

exports.GetUser = async (req, res) => {
  const { _id } = req.user;
  const user = await new User().getUserById(_id);
  if (!user) {
    return res.status(404).json({ message: "User not found." });
  }
  res
    .status(200)
    .json({ success: true, message: "User retrieved successfully", user });
};

exports.UpdateUser = async (req, res) => {
  const { _id } = req.user;

  const { password, ...restData } = req.body;

  let hash;
  if (password) {
    hash = await hashPassword(password);
  }

  const user = await new User().updateUser(
    _id,
    {
      ...restData,
      password: hash
    },
    req.user.email
  );

  if (!user) {
    return res.status(404).json({ success: false, message: "User not found." });
  }

  res
    .status(200)
    .json({ success: true, message: "User updated successfully.", user });
};

exports.DeleteUser = async (req, res) => {
  const { _id } = req.user;

  const user = await new User().deleteUser(_id);

  if (user.deletedCount !== 1) {
    return res.status(404).json({ success: false, message: "User not found." });
  }
  res
    .status(200)
    .json({ success: true, message: "User deleted successfully." });
};
