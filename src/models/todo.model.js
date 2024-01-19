const { ObjectId } = require("mongodb");
const { getDBInstance } = require("../DB/db");

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
      priority: ""
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
      priority: this.priority
    };

    // console.log(this);

    const result = await this.#collection.insertOne(todoData);
    return result.insertedId;
  }

  async getTODOs(userId) {
    const todoList = await this.#collection.find({}).toArray();
    return todoList;
  }

  async getTodoById(todoId) {
    const todo = await this.#collection.findOne({ _id: new ObjectId(todoId) });
    return todo;
  }

  async updateTodo(todoId, updateData) {
    const res = await this.#collection.updateOne(
      { _id: new ObjectId(todoId) },
      { $set: updateData }
    );

    console.log(res);

    return res;
  }

  async deleteTodo(todoId) {
    const todo = await this.getTodoById(todoId);

    if (!todo) {
      return false;
    }

    await this.#collection.deleteOne({ _id: new ObjectId(todoId) });

    return true;
  }
}

module.exports = Todo;
