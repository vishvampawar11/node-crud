const express = require("express");
const router = express.Router();

const {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
} = require("../controllers/tasks");

router.route("/").get(getAllTasks);
router.route("/").post(createTask);
router.route("/:taskId").get(getTask);
router.route("/:taskId").patch(updateTask);
router.route("/:taskId").delete(deleteTask);

module.exports = router;
