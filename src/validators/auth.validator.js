const joi = require("joi");

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

const registerValidator = joi.object({
  name: joi.string().min(3).max(20).required(),
  email: joi.string().email().required(),
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

const passwordValidator = joi.object({
  password: joi
    .string()
    .pattern(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,}$/
    )
    .message(
      "Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one digit, and one special character."
    )
});

const emailValidator = joi.object({ email: joi.string().email().required() });

module.exports = {
  loginValidator,
  registerValidator,
  passwordValidator,
  emailValidator
};
