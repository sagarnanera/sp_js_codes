const express = require("express");
require("dotenv").config();
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// routes
const todoRoute = require("./routes/todo.route");

app.use("/api", todoRoute);

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
