// Write basic boiler plate code with express.json() middleware for the server

const express = require("express");
const app = express();
import {
  todoCreateSchema,
  todoGetSchema,
  todoUpdateSchema,
} from "./types/types";

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.post("/", (req, res) => {});

app.put("/", (req, res) => {});

app.delete("/", (req, res) => {});

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
