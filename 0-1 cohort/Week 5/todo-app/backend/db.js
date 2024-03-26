// import mongoose
const mongoose = require("mongoose");

// connect to the database
mongoose.connect(
  "mongodb+srv://pandey:Rkp1234@100xlearn.u3z8giu.mongodb.net/todo"
);

// create a schema
const todoSchema = new mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

// create a model
const Todo = mongoose.model("Todo", todoSchema);

// export the model
module.exports = {
  Todo,
};
