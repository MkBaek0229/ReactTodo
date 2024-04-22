import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import TodoHeader from "./components/TodoHeader";

function App() {
  const [todos, setTodos] = useState([
    {
      text: "할일1",
    },
    {
      text: "할일2",
    },
    {
      text: "할일3",
    },
  ]);
  // state 처리를 하는 영역

  const onInsert = (str) => {
    setTodos([...todos, str]);
  };

  // view 를 처리하는 영역
  return (
    <>
      <TodoHeader />
      <TodoForm onInsert={onInsert} />
      {/* 부모 자식간의 데이터를 공유하는 props */}
      <TodoList todos={todos} />
    </>
  );
}

export default App;
