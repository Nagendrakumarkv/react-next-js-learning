import UseMemo from "./components/UseMemo";
import Parent from "./components/UseCallback";
import UseReducer from "./components/UseReducer";
import CustomHook from "./components/CustomHook";
import SearchFilter from "./components/UseMemoPractice";
import TodoReducer from "./components/UseReducerPractice";

export default function App() {
  return (
    <div>
      <h1>Day 2</h1>
      <UseMemo />
      <Parent />
      <UseReducer />
      <CustomHook />
      <SearchFilter />
      <TodoReducer />
    </div>
  );
}
