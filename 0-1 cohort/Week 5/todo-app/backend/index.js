// Write basic boiler plate code with express.json() middleware for the server
const express = require("express");
const cors = require("cors");

const app = express();
const {
  todoCreateSchema,
  todoGetSchema,
  todoUpdateSchema,
} = require("./types");
const { Todo } = require("./db");

app.use(cors());
app.use(express.json());

app.post("/", async (req, res) => {
  console.log(todoInput);
  const todo = todoCreateSchema.safeParse(todoInput);
  if (!todo.success) {
    res.status(411).json({ error: todo.error.errors });
    return;
  }
  // put it in mongodb
  await Todo.create(todo.data);

  // We are not using the try catch here as we will handle it through global catch
  res.status(201).json({ message: "Todo created" });
});

app.get("/", async (req, res) => {
  const todos = await Todo.find({});
  res.json({ todos });
});

app.put("/", async (req, res) => {
  const todoInput = req.body;
  const todo = todoUpdateSchema.safeParse(todoInput);
  if (!todo.success) {
    res.status(411).json({ error: todo.error.errors });
    return;
  }

  // put it in mongodb
  await Todo.updateOne({ _id: todo.id }, { complete: true });
  res.json({ message: "Todo marked as completed!" });
});

app.delete("/", async (req, res) => {
  const todoInput = req.body;
  const todo = todoGetSchema.safeParse(todoInput);
  if (!todo.success) {
    res.status(411).json({ error: todo.error.errors });
    return;
  }

  // put it in mongodb
  await Todo.deleteOne({ _id: todo.id });
  res.json({ message: "Todo deleted!" });
});

app.use((err, req, res, next) => {
  console.log(err);
  res.status(500).json({ error: "Something went wrong!" });
});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
