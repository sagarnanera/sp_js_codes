const express = require("express");
const authenticate = require("../middlewares/auth.middleware");
const {
  getTODO,
  getTODOs,
  addTODO,
  updateTODO,
  deleteTODO
} = require("../controllers/todo.controller");
const tryCatchHandler = require("../handlers/globalTryCatch.handler");
const validate = require("../middlewares/validate.middleware");
const {
  todoValidator,
  updateTodoValidator
} = require("../validators/todo.validator");

const router = express.Router();

router.get("/", authenticate, tryCatchHandler(getTODOs));
router.get("/:_todoId", authenticate, tryCatchHandler(getTODO));
router.post(
  "/",
  authenticate,
  validate(todoValidator),
  tryCatchHandler(addTODO)
);
router.put(
  "/:_todoId",
  authenticate,
  validate(updateTodoValidator),
  tryCatchHandler(updateTODO)
);
router.delete("/:_todoId", authenticate, tryCatchHandler(deleteTODO));

module.exports = router;
