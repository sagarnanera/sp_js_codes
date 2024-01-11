const createId = require("../utils/createId");
const readTodoFile = require("../utils/readFile");
const writeTodoFile = require("../utils/writeFile");

const getTodo = async (id) => {
  const todoData = await readTodoFile();
  if (!id || id === "") {
    return todoData;
  }
  
  const todo = todoData.find((todo) => todo.id === id);
  console.log(todo);
  return todo;
};

const createTodo = async (data = {}) => {
  data.id = createId();
  data.createdAt = new Date().toLocaleString();
  const todoData = await readTodoFile();
  todoData.push(data);
  await writeTodoFile(todoData);
  // console.log(data);
  return data;
};

const updateTodo = async (id, { name, description }) => {
  const todoData = await readTodoFile();

  const todoIndex = todoData.findIndex((todo) => todo.id === id);

  if (todoIndex === -1) {
    return undefined;
  }

  if (name) {
    todoData[todoIndex].name = name;
  }
  if (description) {
    todoData[todoIndex].description = description;
  }

  await writeTodoFile(todoData);

  // console.log(todoData[todoIndex]);

  return todoData[todoIndex];
};

const deleteTodo = async (id) => {

  const todoData = await readTodoFile();

  if (todoData.length === 0) {
    return false
  }

  if (!id || id === "") {
    writeTodoFile([]);
    return true
  }
  
  const todosAfterDelete = todoData.filter((todo) => todo.id !== id);

  if (todoData.length <= todosAfterDelete.length) {
    return false;
  }
  await writeTodoFile(todosAfterDelete);
  return true;
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
