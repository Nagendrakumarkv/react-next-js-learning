import { useCallback, useMemo, useState } from "react";
import ProductList from "./components/ProductList";
import Parent from "./components/Parent";

export default function App() {
  const [count, setCount] = useState(0);

  const products = useMemo(
    () => [
      { id: 1, name: "Laptop" },
      { id: 2, name: "Phone" },
    ],
    []
  );

  const logMessage = useCallback(() => {
    console.log("Button clicked!");
  }, []);

  return (
    <div>
      <h1>Day 4</h1>
      <Parent />

      <h1>App Count: {count}</h1>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={logMessage}>Log</button>
      <ProductList products={products} />
    </div>
  );
}
