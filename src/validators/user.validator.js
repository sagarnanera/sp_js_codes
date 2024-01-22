const joi = require("joi");

exports.userValidator = joi.object({
  name: joi.string().min(3).max(20),
  email: joi.string().email(),
  password: joi
    .string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    )
    .message(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
    ),
  organization: joi.string()
});

exports.userIdObjectValidator = joi.object({
  _id: joi.string().length(24).messages({ messages: "valid userId required" })
});
