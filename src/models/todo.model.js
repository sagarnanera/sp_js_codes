const { ObjectId } = require("mongodb");
const { getDBInstance } = require("../DB/db");
const { customError } = require("../handlers/error.handler");

class Todo {
  userId;
  title;
  description;
  status;
  dueOn;
  createdOn;
  tags = [];
  priority;
  // static #collection = getDBInstance().collection("todos") ;
  #collection;

  constructor(
    { userId, title, description, status, dueOn, tags, priority } = {
      userId: "",
      title: "",
      description: "",
      status: "",
      dueOn: "",
      tags: [],
      priority: "",
    }
  ) {
    if (arguments.length === 0) {
      this.#collection = getDBInstance().collection("todos");
      return;
    }

    this.userId = userId;
    this.title = title;
    this.description = description;
    this.status = status;
    this.dueOn = new Date(dueOn).toUTCString();
    this.createdOn = new Date().toUTCString();
    this.tags = tags;
    this.priority = priority;
    this.#collection = getDBInstance().collection("todos");
  }

  // _getCollection = () => {
  //   const db = dbClient.getDBInstance();
  //   return db.collection('todos');
  // };

  async save() {
    const todoData = {
      userId: this.userId,
      title: this.title,
      description: this.description,
      status: this.status,
      dueOn: this.dueOn,
      createdOn: this.createdOn,
      tags: this.tags,
      priority: this.priority,
    };

    // console.log(this);

    const result = await this.#collection.insertOne(todoData);
    return result.insertedId;
  }

  async getTODOs(userId) {
    const todoList = await this.#collection
      .find({ userId: new ObjectId(userId) })
      .toArray();
    return todoList;
  }

  async getTodoById(todoId) {
    // if (!ObjectId.isValid(todoId)) {
    //   throw new customError("Invalid id...", 400)
    // }
    // try {
    const todo = await this.#collection.findOne({ _id: new ObjectId(todoId) });
    return todo;
    // } catch (error) {
    // console.log('err : ', error);
    // }
  }

  async updateTodo(todoId, updateData) {
    if (updateData.dueOn) {
      console.log("update todo", updateData);

      updateData.dueOn = new Date(updateData.dueOn).toUTCString();
    }

    const res = await this.#collection.findOneAndUpdate(
      { _id: new ObjectId(todoId) },
      { $set: updateData },
      { returnOriginal: false }
    );

    console.log(res);

    return res;
  }

  async deleteTodo(todoId) {
    // const todo = await this.getTodoById(todoId);

    // if (!todo) {
    //   return false;
    // }

    const res = await this.#collection.findOneAndDelete({
      _id: new ObjectId(todoId),
    });

    return res;
  }
}

module.exports = Todo;
