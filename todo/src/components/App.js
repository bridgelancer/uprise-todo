import React from 'react';
import './App.css';
import TodoForm from '../containers/TodoForm.js'
import TodoContainer from '../containers/TodoContainer.js'
import FetchTodo from '../containers/FetchTodo.js'

function App() {
  return (
    <div>
      <FetchTodo />
      <TodoForm />
      <TodoContainer />
    </div>
  )
}

export default App;
