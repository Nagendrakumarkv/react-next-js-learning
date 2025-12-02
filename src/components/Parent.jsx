import { useState } from "react";
import Child from "./Child";

export default function Parent() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h2>Parent Count: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <Child name="Nagendra" />
    </div>
  );
}
