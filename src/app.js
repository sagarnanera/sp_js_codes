const express = require("express");
const cookieParser = require("cookie-parser");

// error instances
const {
  customError,
  notFoundHandler,
  ErrorHandler,
  invalidJsonHandler
} = require("./handlers/error.handler");

// require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

// routes
const authRoute = require("./routes/auth.route");
const userRoute = require("./routes/user.route");
const todoRoute = require("./routes/todo.route");

app.use("/api/auth", authRoute);
app.use("/api/user", userRoute);
app.use("/api/todo", todoRoute);

app.use(invalidJsonHandler);
app.use(notFoundHandler);
app.use(ErrorHandler);

module.exports = app;
