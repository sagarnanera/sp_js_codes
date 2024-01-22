const Todo = require("../models/todo.model");
const { PRIORITY, STATUS } = require("../utils/constants");

exports.getTODOs = async (req, res) => {
  const {
    title,
    skip = 0,
    limit = 10,
    sortBy,
    sortOrder,
    priority,
    status,
    dueOn,
    dueRange = " ",
    tags = " "
  } = req.query;

  const filter = { userId: req.user._id };

  // field filters
  if (title) {
    filter.title = { $regex: new RegExp(title, "i") };
  }

  if (priority && Object.values(PRIORITY).includes(priority.toLowerCase())) {
    filter.priority = priority.toLowerCase();
  }

  if (status && Object.values(STATUS).includes(status.toLowerCase())) {
    filter.status = status.toLowerCase();
  }

  const tagList = tags.split(":").filter((tag) => tag.trim() !== "");

  if (tagList.length > 0) {
    filter.tags = { $in: tagList };
  }

  // date filters
  if (dueOn) {
    let dueDateFilter = {};
    let dueDate = new Date(dueOn);
    dueDateFilter.$gt = dueDate;
    dueDateFilter.$lt = new Date(
      dueDate.getFullYear(),
      dueDate.getMonth(),
      dueDate.getDate() + 1
    );

    filter.dueOn = dueDateFilter;
  }

  const due = dueRange?.split(":").filter((due) => due.trim() !== "");

  if (due.length > 0 && !filter.dueOn) {
    let dueFilter = {};
    const dueStart = new Date(due[0]);
    const dueEnd = new Date(due[1]);

    if (dueStart && !isNaN(dueStart.getTime())) {
      dueFilter.$gt = dueStart;
    }
    if (dueEnd && !isNaN(dueEnd.getTime())) {
      dueFilter.$lt = dueEnd;
    }

    filter.dueOn = dueFilter;
  }

  // sort filters
  let sortFilter = {};
  if (sortBy && ["title", "dueOn", "status"].includes(sortBy)) {
    sortFilter[sortBy] = sortOrder === "desc" ? -1 : 1;
  } else {
    sortFilter["priority"] = 1;
  }

  console.log("filter : ", filter);
  console.log("sortFilter : ", sortFilter);

  const todoList = await new Todo().getTODOs(
    filter,
    parseInt(skip),
    parseInt(limit),
    sortFilter
  );

  res
    .status(200)
    .json({ success: true, totalDocuments: todoList.length, todoList });
};

exports.getTODO = async (req, res) => {
  const todoId = req.params._todoId;

  const todo = await new Todo().getTodo(todoId, req.user._id);

  if (!todo) {
    return res.status(404).json({ success: false, message: "TODO not found." });
  }

  res.status(200).json({ success: true, todo });
};

exports.addTODO = async (req, res) => {
  const todoData = req.body;

  const todo = await new Todo({ userId: req.user._id, ...todoData }).save();

  return res
    .status(200)
    .json({ success: true, message: "Created TODO successfully...", todo });
};

exports.updateTODO = async (req, res) => {
  const todoId = req.params._todoId;
  const todoData = req.body;

  const updatedTodo = await new Todo().updateTodo(
    todoId,
    todoData,
    req.user._id
  );

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
};

exports.deleteTODO = async (req, res) => {
  const todoId = req.params._todoId;

  const isDeleted = await new Todo().deleteTodo(todoId, req.user._id);

  if (!isDeleted && isDeleted?.deletedCount !== 1) {
    return res.status(404).json({
      success: false,
      message: "TODO data not found..."
    });
  }

  return res
    .status(200)
    .json({ success: true, message: "Deleted TODO successfully..." });
};
