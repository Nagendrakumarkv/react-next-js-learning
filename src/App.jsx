import Counter from "./components/Counter";
import Todo from "./components/Todo";
import Timer from "./components/Timer";
import ProfileCard from "./components/ProfileCard";
import TypingStatus from "./components/TypingStatus";

export default function App() {
  return (
    <div>
      <h1>Day 1 Practice</h1>
      <TypingStatus />
      <Counter />
      <Todo />
      <Timer />
      <ProfileCard name="Nagendra" age={25} location="Bangalore" />
    </div>
  );
}
