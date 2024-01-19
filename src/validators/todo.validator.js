const joi = require("joi");
const { STATUS, PRIORITY } = require("../utils/constants");
const todoValidator = joi.object({
  title: joi.string().min(3).max(20).required(),
  description: joi.string().max(100).required(),
  status: joi
    .string()
    .valid(...Object.values(STATUS))
    .required()
    .messages({
      "valid.base": "status should be one of completed, processing, pending."
    }),
  priority: joi
    .string()
    .valid(...Object.values(PRIORITY))
    .required()
    .messages({
      "valid.base": "priority should be one of High, low, medium."
    }),
  dueOn: joi.date().min("now").required().messages({
    "date.base": "End date should be a valid date"
  }),
  tags: joi.array().items(joi.string().min(2).max(10))
});

// userId: "",
// title: "",
// description: "",
// status: "",
// dueOn: "",
// tags: [],
// priority

const updateTodoValidator = joi.object({
  title: joi.string().min(3).max(20),
  description: joi.string().max(100),
  status: joi
    .string()
    .valid(...Object.values(STATUS))
    .messages({
      "valid.base": "status should be one of completed, processing, pending."
    }),
  priority: joi
    .string()
    .valid(...Object.values(PRIORITY))
    .messages({
      "valid.base": "priority should be one of High, low, medium."
    }),
  dueOn: joi.date().max("now").messages({
    "date.base": "End date should be a valid date"
  }),
  tags: joi.array().items(joi.string().min(2).max(10))
});

module.exports = {
  todoValidator,
  updateTodoValidator
};
