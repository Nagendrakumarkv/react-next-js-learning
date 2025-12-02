import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Product() {
  const { add } = useContext(CartContext);

  const item = { id: 1, name: "Laptop", price: 50000 };

  return (
    <div>
      <h3>{item.name}</h3>
      <button onClick={() => add(item)}>Add to Cart</button>
    </div>
  );
}
