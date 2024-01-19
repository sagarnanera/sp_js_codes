const express = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getTODO,
  getTODOs,
  addTODO,
  updateTODO,
  deleteTODO
} = require("../controllers/todo.controller");

// const {
//   deleteTodo,
//   getTodo,
//   createTodo,
//   updateTodo
// } = require("../services/todo.service");
// const {
//   todoValidator,
//   updateTodoValidator
// } = require("../validators/todo.validator");
const router = express.Router();

router.get("/", authenticate, getTODOs);
router.get("/:_todoId", authenticate, getTODO);
router.post("/", authenticate, addTODO);
router.put("/:_todoId", authenticate, updateTODO);
router.delete("/:_todoId", authenticate, deleteTODO);

// router.get("/todo", async (req, res) => {
//   const { isCompleted } = req.query;

//   try {
//     let todos = await getTodo();

//     if (isCompleted !== undefined) {
//       todos = todos.filter((todo) => {
//         return todo.isCompleted.toString() === isCompleted;
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Retrieved TODOs successfully...",
//       todos
//     });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error retrieving TODOs..." });
//   }
// });

// router.get("/todo/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const todo = await getTodo(id);

//     if (!todo) {
//       return res.status(404).json({
//         success: false,
//         message: "TODO data not found..."
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Retrieved TODO data successfully...",
//       todo
//     });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error retrieving TODO data..." });
//   }
// });

// router.post("/todo", async (req, res) => {
//   const { error } = todoValidator.validate(req.body);
//   if (error) {
//     return res
//       .status(400)
//       .json({ success: false, message: error.details[0].message });
//   }

//   const todoData = req.body;
//   try {
//     const todo = await createTodo(todoData);

//     return res
//       .status(200)
//       .json({ success: true, message: "Created TODO successfully...", todo });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error creating TODO..." });
//   }
// });

// router.put("/todo/:id", async (req, res) => {
//   const { error } = updateTodoValidator.validate(req.body);
//   if (error) {
//     return res
//       .status(400)
//       .json({ success: false, message: error.details[0].message });
//   }

//   const id = req.params.id;
//   const todoData = req.body;
//   try {
//     const updatedTodo = await updateTodo(id, todoData);

//     if (!updatedTodo) {
//       return res.status(404).json({
//         success: false,
//         message: "TODO data not found..."
//       });
//     }

//     return res.status(200).json({
//       success: true,
//       message: "Updated TODO successfully...",
//       updatedTodo
//     });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error Updating TODO..." });
//   }
// });

// router.delete("/todo", async (req, res) => {
//   try {
//     const isDeleted = await deleteTodo();

//     // console.log("todo==");

//     if (!isDeleted) {
//       return res.status(404).json({
//         success: false,
//         message: "No TODOs found to delete..."
//       });
//     }

//     return res
//       .status(200)
//       .json({ success: true, message: "Deleted TODOs successfully..." });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error deleting TODOs..." });
//   }
// });

// router.delete("/todo/:id", async (req, res) => {
//   const id = req.params.id;
//   try {
//     const isDeleted = await deleteTodo(id);
//     // console.log("in deleted with id", id);

//     if (!isDeleted) {
//       return res.status(404).json({
//         success: false,
//         message: "TODO data not found..."
//       });
//     }

//     return res
//       .status(200)
//       .json({ success: true, message: "Deleted TODO successfully..." });
//   } catch (error) {
//     console.log(error);
//     return res
//       .status(500)
//       .json({ success: false, message: "Error deleting TODO..." });
//   }
// });

module.exports = router;
