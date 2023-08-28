const express = require("express");
const {
  postTodo,
  updateTodo,
  deleteTodo,
  getTodo,
} = require("../controllers/todoControllers");
const router = express.Router();
// const getuserData = require("../controllers/userControllers");

// router.get("/home", getuserData);
router.get("/gettodo", getTodo);
router.post("/posttodo/:todo", postTodo);
router.put("/updatetodo/:id/:updatetodo", updateTodo);
router.delete("/deletetodo/:id", deleteTodo);

module.exports = router;
