const { getDBInstance } = require("../DB/db");
const convertToObjectId = require("../utils/objectIdConverter");

class Todo {
  userId;
  title;
  description;
  status;
  dueOn;
  createdOn;
  tags = [];
  priority;
  #collection;

  constructor({
    userId = "",
    title = "",
    description = "",
    status = "pending",
    dueOn = "",
    tags = [],
    priority = 1
  } = {}) {
    if (arguments.length === 0) {
      this.#collection = getDBInstance().collection("todos");
      return;
    }

    this.userId = userId;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueOn = new Date(dueOn);
    this.createdOn = new Date();
    this.tags = tags;
    this.priority = priority;
    this.#collection = getDBInstance().collection("todos");
  }

  async save() {
    const todoData = {
      userId: this.userId,
      title: this.title,
      description: this.description,
      status: this.status,
      dueOn: this.dueOn,
      createdOn: this.createdOn,
      tags: this.tags,
      priority: this.priority
    };

    const result = await this.#collection.insertOne(todoData);
    return result.insertedId;
  }

  async getTODOs(filter, skip, limit, sortFilter) {
    const todoList = await this.#collection
      .find(filter)
      .project({
        title: 1,
        dueOn: 1,
        status: 1,
        priority: 1,
        tags: 1
      })
      .skip(skip)
      .limit(limit)
      .sort(sortFilter)
      .toArray();

    return todoList;
  }

  async getTodo(todoId, userId) {
    const todo = await this.#collection.findOne({
      _id: convertToObjectId(todoId),
      userId: convertToObjectId(userId)
    });
    return todo;
  }

  async updateTodo(todoId, updateData, userId) {
    if (updateData.dueOn) {
      updateData.dueOn = new Date(updateData.dueOn);
    }

    const res = await this.#collection.findOneAndUpdate(
      { _id: convertToObjectId(todoId), userId: convertToObjectId(userId) },
      { $set: updateData },
      { returnDocument: "after" }
    );

    return res;
  }

  async deleteTodo(todoId, userId) {
    const res = await this.#collection.findOneAndDelete({
      _id: convertToObjectId(todoId),
      userId: convertToObjectId(userId)
    });

    return res;
  }
}

module.exports = Todo;
