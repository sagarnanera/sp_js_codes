const createId = require("../utils/createId");
const readTodoFile = require("../utils/readFile");
const writeTodoFile = require("../utils/writeFile");

const getTodo = async (id) => {
  try {
    const todoData = await readTodoFile();
    if (!id || id === "") {
      return todoData;
    }

    const todo = todoData.find((todo) => todo.id === id);
    // console.log(todo);
    return todo;
  } catch (error) {
    throw error;
  }
};

const createTodo = async (data = {}) => {
  try {
    data.id = createId();
    data.createdAt = new Date().toLocaleString();
    data.isCompleted = false;
    const todoData = await readTodoFile();
    todoData.push(data);
    await writeTodoFile(todoData);
    // console.log(data);
    return data;
  } catch (error) {
    throw error;
  }
};

const updateTodo = async (id, { name, description, isCompleted }) => {
  try {
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

    if (isCompleted !== undefined) {
      todoData[todoIndex].isCompleted = isCompleted;
    }

    await writeTodoFile(todoData);

    // console.log(todoData[todoIndex]);

    return todoData[todoIndex];
  } catch (error) {
    throw error;
  }
};

const deleteTodo = async (id) => {
  try {
    const todoData = await readTodoFile();

    if (todoData.length === 0) {
      return false;
    }

    if (!id || id === "") {
      writeTodoFile([]);
      return true;
    }

    const todosAfterDelete = todoData.filter((todo) => todo.id !== id);

    if (todoData.length <= todosAfterDelete.length) {
      return false;
    }
    await writeTodoFile(todosAfterDelete);
    return true;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getTodo,
  createTodo,
  updateTodo,
  deleteTodo
};
