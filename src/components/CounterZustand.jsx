import { useCounter } from "../store/useCounter";

export default function CounterZustand() {
  const { count, increase, decrease } = useCounter();

  return (
    <div>
      <h2>Zustand Count: {count}</h2>
      <button onClick={increase}>+</button>
      <button onClick={decrease}>-</button>
    </div>
  );
}
