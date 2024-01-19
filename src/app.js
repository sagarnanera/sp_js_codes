const express = require("express");
const cookieParser = require("cookie-parser");
// require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// DB
// const db = require("./DB/db");
// const { getDBInstance, connectDB } = require("./DB/db");
// connectDB();

const { PRIORITY, STATUS } = require("./utils/constants");

// models
const Todo = require("./models/todo.model");
const User = require("./models/user.model");

// routes
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const todoRoute = require("./routes/todo.route");

// app.get("/todo", async (req, res) => {
//   const todo = new Todo({
//     title: "test todo",
//     description: "this is test todo.....",
//     tags: ["office"],
//     priority: PRIORITY["HIGH"],
//     dueOn: Date.now + 3600 * 1000,
//     status: STATUS["COMPLETED"]
//   });

//   const todoId = await todo.save();

//   const redTodo = await todo.getTODOs(todoId);

//   // const deletedId = await todo.deleteTodo(todoId);

//   return res.status(200).json({ success: true, todoId, redTodo });
// });

// app.get("/user", async (req, res) => {
//   const user = new User({
//     name: "sagar nanera",
//     email: "skn12@gmail.com",
//     password: "1234",
//     organization: "sp solutions llp"
//   });

//   const userId = await user.save();

//   console.log(typeof userId,userId);

//   const resUser = await user.getUserById(userId);

//   // const deletedId = await user.deleteTodo(todoId);

//   return res.status(200).json({ success: true, userId, resUser });
// });

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

app.get("*", (req, res) => {
  return res
    .status(404)
    .json({ success: false, message: "Not found, Check the URL properly !!!" });
});

app.use((err, req, res, next) => {
  console.log(err);
  if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
    return res.status(400).json({ message: "Invalid JSON payload" });
  }

  return res
    .status(500)
    .json({ success: false, message: "Internal Server Error" });
});

module.exports = app;

// dump.
// db.then((dbClient) => console.log(dbClient.listCollections().toArray())).catch((err) =>
//   console.error(err)
// );
// const t = new Todo();

// const db = getDBInstance();
// const todo = await db.collection("todos");
// const todo = t.getCollection();

// const result = await todo.insertOne({
//   title: "test todo",
//   description: "this is test todo.....",
//   tag: ["office"],
//   orders: 1,
//   createdOn: Date.now(),
//   dueOn: Date.now() + 3600,
//   status: "completed"
// });

// console.log(result, 5);

// todo.save();
