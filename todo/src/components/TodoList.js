import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleToDo}) {
  console.log(todos)
  return (
      todos.map(todo =>
        <ul key={todo.id}>
          <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleToDo(todo.id)}
          />
        </ul>
      )
  )
}


export default TodoList
