const joi = require("joi");

const todoValidator = joi.object({
  name: joi.string().required(),
  description: joi.string().required(),
});

const updateTodoValidator = joi.object({
  name: joi.string(),
  description: joi.string(),
  isCompleted:joi.bool().strict()
});

module.exports = {
    todoValidator,
    updateTodoValidator
}