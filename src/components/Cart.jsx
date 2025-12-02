import { useContext } from "react";
import { CartContext } from "../context/CartContext";

export default function Cart() {
  const { cart, remove } = useContext(CartContext);

  return (
    <div>
      <h2>Cart Items</h2>

      {cart.map(item => (
        <p key={item.id}>
          {item.name}
          <button onClick={() => remove(item.id)}>Remove</button>
        </p>
      ))}
    </div>
  );
}
