// eslint-disable-next-line react/prop-types
export default function Todos({ todos }) {
  return (
    <div>
      <h1>Todos</h1>
      <ul>
        {
          // eslint-disable-next-line react/prop-types
          todos.map((todo) => (
            <li key={todo._id}>
              <input type="checkbox" value={todo.completed.toString()} />
              <span style={{ paddingRight: 5 }}>{todo.title}</span>
              <button style={{ paddingRight: 5 }}>Delete</button>
              <h4 style={{ paddingRight: 5 }}>{todo.description}</h4>
            </li>
          ))
        }
      </ul>
    </div>
  );
}
