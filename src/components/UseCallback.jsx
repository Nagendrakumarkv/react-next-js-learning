import { useState, useCallback } from "react";

function Child({ onClick }) {
  console.log("Child rendered");
  return <button onClick={onClick}>Click Child</button>;
}

export default function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Clicked!");
  }, []);

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>

      <Child onClick={handleClick} />
    </div>
  );
}
