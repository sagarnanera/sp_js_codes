const Todo = require("../models/todo.model");
const {
  todoValidator,
  updateTodoValidator
} = require("../validators/todo.validator");

exports.getTODOs = async (req, res) => {

  // for filters
  // const {skip,limit,}

  try {
    const todos = await new Todo().getTODOs(req.user._id,);

    res.status(200).json({ success: true, todos });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

exports.getTODO = async (req, res) => {
  try {
    const todoId = req.params._todoId;

    const todo = await new Todo().getTodoById(todoId);

    if (!todo) {
      res.status(404).json({ success: false, message: "TODO not found." });
    }

    res.status(200).json({ success: true, todo });
  } catch (error) {
    console.log(error);
    res.status(500).json({ success: false, message: "Internal Server Error." });
  }
};

exports.addTODO = async (req, res) => {

  const { error } = todoValidator.validate(req.body);

  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const todoData = req.body;

  try {
    const todo = await new Todo({ userId: req.user._id, ...todoData }).save();

    return res
      .status(200)
      .json({ success: true, message: "Created TODO successfully...", todo });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error creating TODO..." });
  }
};

exports.updateTODO = async (req, res) => {
  const { error } = updateTodoValidator.validate(req.body);
  if (error) {
    return res
      .status(400)
      .json({ success: false, message: error.details[0].message });
  }

  const todoId = req.params._todoId;
  const todoData = req.body;
  try {
    const updatedTodo = await new Todo().updateTodo(todoId, todoData);

    if (!updatedTodo) {
      return res.status(404).json({
        success: false,
        message: "TODO data not found..."
      });
    }

    return res.status(200).json({
      success: true,
      message: "Updated TODO successfully...",
      updatedTodo
    });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error Updating TODO..." });
  }
};

exports.deleteTODO = async (req, res) => {
  const todoId = req.params._todoId;

  try {
    const isDeleted = await new Todo().deleteTodo(todoId);

    if (!isDeleted) {
      return res.status(404).json({
        success: false,
        message: "TODO data not found..."
      });
    }

    return res
      .status(200)
      .json({ success: true, message: "Deleted TODO successfully..." });
  } catch (error) {
    console.log(error);
    return res
      .status(500)
      .json({ success: false, message: "Error deleting TODO..." });
  }
};
