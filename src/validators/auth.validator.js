const joi = require("joi");

const loginValidator = joi.object({
  email: joi.string().email().required(),
  password: joi.string().required()
});

const registerValidator = joi.object({
  name: joi.string().min(3).max(20).required(),
  email: joi.string().email().required(),
  password: joi.string().min(6).required(),
  organization: joi.string()
});

const passwordValidator = joi.object({
  password: joi.string().min(6).required()
});

const emailValidator = joi.object({ email: joi.string().email().required() });

module.exports = {
  loginValidator,
  registerValidator,
  passwordValidator
};
