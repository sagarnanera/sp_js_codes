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

// const resetPassValidator = joi.object({
//   token: joi.string().length(64).required(),
//   password: joi.string().min(6).required()
// });

const passwordValidator = joi.object({
  password: joi.string().min(6).required()
});

// const emailValidator = joi.object({ email: joi.string().email().required() });

// const tokenValidator = joi.object({
//   token: joi.string().length(64).required()
// });

// const contactUsValidator = joi.object({
//   name: joi.string().max(20),
//   email: joi.string().email().required(),
//   message: joi.string().max(1500).required(),
//   captchaToken: joi.string().required()
// });

module.exports = {
  loginValidator,
  registerValidator,
  passwordValidator
};
