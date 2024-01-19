// const { getDBInstance } = require("../DB/db");

// class Todo {
//   userId;
//   title;
//   description;
//   status;
//   dueOn;
//   createdOn;
//   tags = [];
//   orders;
//   static _collection = getDBInstance().collection("todos");

//   constructor({
//     userId,
//     title,
//     description,
//     status,
//     dueOn,
//     createdOn,
//     tags = [],
//     orders
//   }) {
//     this.userId = userId;
//     this.title = title;
//     this.description = description;
//     this.status = status;
//     this.dueOn = dueOn;
//     this.createdOn = createdOn;
//     this.tags = tags;
//     this.orders = orders;
//   }

//   // _getCollection = () => {
//   //   const db = dbClient.getDBInstance();
//   //   return db.collection('todos');
//   // };

//   async save() {
//     const todoData = {
//       title: this.title,
//       description: this.description,
//       status: this.status,
//       dueOn: this.dueOn,
//       createdOn: this.createdOn,
//       tags: this.tags,
//       orders: this.orders
//     };

//     console.log(this);

//     const result = await this._collection.insertOne(todoData);
//     return result.insertedId;
//   }

//   static async getTODOs(userId) {
//     const todoList = await this._collection.find({ userId: userId });
//     return todoList;
//   }

//   static async getTodoById(todoId) {
//     const todo = await this._collection.findOne({ _id: todoId });
//     return todo;
//   }

//   static async updateTodo(todoId, updateData) {
//     await this._collection.updateOne({ _id: todoId }, { $set: updateData });
//   }

//   static async deleteTodo(todoId) {
//     await this._collection.deleteOne({ _id: todoId });
//   }
// }

// module.exports = Todo;
