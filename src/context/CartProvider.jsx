import { useReducer } from "react";
import { CartContext } from "./CartContext";

const initialState = [];

function cartReducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, action.payload];
    case "remove":
      return state.filter(item => item.id !== action.payload);
    default:
      return state;
  }
}

export default function CartProvider({ children }) {
  const [cart, dispatch] = useReducer(cartReducer, initialState);

  const add = (item) => dispatch({ type: "add", payload: item });
  const remove = (id) => dispatch({ type: "remove", payload: id });

  return (
    <CartContext.Provider value={{ cart, add, remove }}>
      {children}
    </CartContext.Provider>
  );
}
