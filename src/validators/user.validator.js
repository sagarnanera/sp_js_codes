const joi = require("joi");

exports.userValidator = joi.object({
  name: joi.string().min(3).max(20),
  email: joi.string().email(),
  password: joi.string().min(6),
  organization: joi.string()
});

exports.userIdObjectValidator = joi.object({
  _id: joi.string().length(24).messages({ messages: "valid userId required" })
});
