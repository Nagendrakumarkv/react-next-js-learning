import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

export default function ThemeSwitcher() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <div style={{
      background: theme === "light" ? "#fff" : "#222",
      color: theme === "light" ? "#000" : "#fff",
      padding: "20px"
    }}>
      <h2>Current Theme: {theme}</h2>
      <button onClick={toggleTheme}>Toggle</button>
    </div>
  );
}
