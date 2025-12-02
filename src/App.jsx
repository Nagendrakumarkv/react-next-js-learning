import Cart from "./components/Cart";
import CounterZustand from "./components/CounterZustand";
import Product from "./components/Product";
import ThemeSwitcher from "./components/ThemeSwitcher";

export default function App() {
  return (
    <div>
      <h1>Day 3</h1>
      <ThemeSwitcher />
      <Product />
      <Cart />
      <CounterZustand/>
    </div>
  );
}
