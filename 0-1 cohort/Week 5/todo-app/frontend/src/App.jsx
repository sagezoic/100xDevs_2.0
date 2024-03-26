import { useEffect, useState } from "react";
import "./App.css";
import CreateToDo from "./components/CreateToDo";
import Todos from "./components/Todos";

function App() {
  const [todos, setTodos] = useState([]);

  useEffect(
    () => async () => {
      await fetch("http://localhost:3000/")
        .then((res) => res.json())
        .then((data) => {
          setTodos(data.todos);
        });
    },
    []
  );

  return (
    <>
      <CreateToDo />
      <Todos todos={todos} />
    </>
  );
}

export default App;
