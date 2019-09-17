import React from 'react';
import './App.css';
import TodoForm from '../containers/TodoForm.js'
import TodoContainer from '../containers/TodoContainer.js'

function App() {
  return (
    <div>
      <TodoForm />
      <TodoContainer />
    </div>
  )
}

export default App;
