import { useState } from "react";

export default function Todo() {
  const [task, setTask] = useState("");
  const [list, setList] = useState([]);

  const addTask = () => {
    if (!task.trim()) return;

    setList([...list, { id: Date.now(), text: task }]);
    setTask("");
  };

  const deleteTask = (id) => {
    const filtered = list.filter((item) => item.id !== id);
    setList(filtered);
  };

  return (
    <div>
      <h2>Todo App</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter task"
      />
      <button onClick={addTask}>Add</button>

      <ul>
        {list.map((item) => (
          <li key={item.id}>
            {item.text}
            <button
              onClick={() => deleteTask(item.id)}
              style={{
                marginLeft: "10px",
                color: "white",
                background: "red",
                border: "none",
                padding: "3px 8px",
                borderRadius: "4px",
                cursor: "pointer"
              }}
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
