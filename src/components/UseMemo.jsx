import { useState, useMemo } from "react";

export default function ExpensiveCalculation() {
  const [count, setCount] = useState(0);

  const expensiveValue = useMemo(() => {
    console.log("Running heavy calculation...");
    return count * 1000;
  }, [count]);

  return (
    <div>
      <h2>Value: {expensiveValue}</h2>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  );
}
