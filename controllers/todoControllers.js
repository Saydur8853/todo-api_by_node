const Todo = require("../models/TodoSchema");

const postTodo = async (req, res) => {
  try {
    console.log(req.params.todo);
    const success = await Todo.create({ todo: req.params.todo });

    if (success) {
      res.status(200).send({ massage: "Todo created!!!" });
    }
    res.status(400).send({ massage: "NOT Created !!!" });
  } catch (error) {
    console.log(error);
  }
};

const updateTodo = async (req, res) => {
  try {
    console.log(req.params.updatetodo);
    const success = await Todo.findByIdAndUpdate(req.params.id, {
      todo: req.params.updatetodo,
    });

    if (success) {
      res.status(200).send({ massage: "Todo Updated!!!" });
    }
    res.status(400).send({ massage: "NOT Updated !!!" });
  } catch (error) {
    console.log(error);
  }
};

const deleteTodo = async (req, res) => {
  try {
    const success = await Todo.findByIdAndDelete(req.params.id);

    if (success) {
      res.status(200).send({ massage: "Todo Deleted!!!" });
    }
    res.status(400).send({ massage: "NOT Deleted !!!" });
  } catch (error) {
    console.log(error);
  }
};

const getTodo = async (req, res) => {
  try {
    const success = await Todo.find();

    if (success) {
      res.status(200).send({ massage: "ok!!!", success });
    }
    res.status(400).send({ massage: "NOT ok !!!" });
  } catch (error) {
    console.log(error);
  }
};
module.exports = { postTodo, updateTodo, deleteTodo, getTodo };
