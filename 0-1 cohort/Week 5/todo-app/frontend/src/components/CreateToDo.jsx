import { useState } from "react";

function CreateToDo() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  async function handleCreateTodo() {
    await fetch("http://localhost:3000/", {
      method: "POST",
      body: JSON.stringify({
        title,
        description,
      }),
      headers: {
        "Content-Type": "application/json",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) alert(data.message);
      });
  }

  console.log(title, description);
  return (
    <div>
      <label style={{ paddingRight: 5 }}>Title</label>
      <input
        id="title"
        type="text"
        placeholder="Title"
        onChange={(e) => setTitle(e.target.value)}
      />
      <br />
      <br />
      <label style={{ paddingRight: 5 }}>Description</label>
      <input
        id="desc"
        type="text"
        placeholder="Description"
        onChange={(e) => setDescription(e.target.value)}
      />
      <br />
      <br />
      <button onClick={handleCreateTodo}>Add</button>
    </div>
  );
}

export default CreateToDo;
