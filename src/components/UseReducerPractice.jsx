import { useReducer, useState } from "react";

const initialState = [];

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.payload }];
    case "delete":
      return state.filter((todo) => todo.id !== action.payload);
    default:
      return state;
  }
}

export default function TodoReducer() {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [task, setTask] = useState("");

  return (
    <div>
      <h2>Todo using useReducer</h2>

      <input
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Add task"
      />

      <button onClick={() => {
        dispatch({ type: "add", payload: task });
        setTask("");
      }}>
        Add
      </button>

      <ul>
        {state.map((todo) => (
          <li key={todo.id}>
            {todo.text}
            <button onClick={() => dispatch({ type: "delete", payload: todo.id })}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
