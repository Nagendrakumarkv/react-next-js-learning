import { useEffect, useState } from "react";

export default function Timer() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    console.log("Timer Started");

    const interval = setInterval(() => {
      setCount((prev) => prev + 1);
    }, 1000);

    return () => {
      console.log("Timer Stopped");
      clearInterval(interval);
    };
  }, []);

  return (
    <>
      <h2>Timer: {count}</h2>
      <button onClick={()=> setCount(0)}>Clear Timer</button>
    </>
  );
}
