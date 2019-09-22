import React from "react";
import TodoForm from "../containers/TodoForm.jsx";
import TodoContainer from "../containers/TodoContainer.jsx";
import FetchTodo from "../containers/FetchTodo.jsx";

function App() {
  return (
    <div>
      <FetchTodo />
      <TodoForm />
      <TodoContainer />
    </div>
  );
}

export default App;
