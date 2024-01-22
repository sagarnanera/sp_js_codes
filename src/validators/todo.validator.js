const joi = require("joi");
const { STATUS, PRIORITY } = require("../utils/constants");
const todoValidator = joi.object({
  title: joi.string().min(3).max(20).required(),
  description: joi.string().max(100).required(),
  status: joi
    .string()
    .valid(...Object.values(STATUS))
    .required(),
  priority: joi
    .string()
    .valid(...Object.values(PRIORITY))
    .required(),
  dueOn: joi.date().min("now").required().messages({
    "date.base": "End date should be a valid date"
  }),
  tags: joi.array().items(joi.string().min(2).max(10))
});

const updateTodoValidator = joi.object({
  title: joi.string().min(3).max(20),
  description: joi.string().max(100),
  status: joi.string().valid(...Object.values(STATUS)),
  priority: joi.string().valid(...Object.values(PRIORITY)),
  dueOn: joi.date().min("now").messages({
    "date.base": "End date should be a valid date"
  }),
  tags: joi.array().items(joi.string().min(2).max(10))
});

module.exports = {
  todoValidator,
  updateTodoValidator
};
