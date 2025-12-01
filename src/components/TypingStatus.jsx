import { useState, useRef } from "react";

export default function TypingStatus() {
  const [text, setText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const timer = useRef(null);

  const handleInputChange = (e) => {
    const value = e.target.value;
    setText(value);
    setIsTyping(true);

    clearTimeout(timer.current);

    timer.current = setTimeout(() => {
      setIsTyping(false);
    }, 600);
  };

  return (
    <div>
      <h2>Typing Status</h2>

      <input
        placeholder="Type something..."
        value={text}
        onChange={handleInputChange}
      />

      {isTyping && <p style={{ color: "blue" }}>Typing...</p>}
    </div>
  );
}
