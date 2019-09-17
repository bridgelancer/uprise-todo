import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleTodo}) {
  console.log(todos, toggleTodo)
  return (
      todos.map(todo =>
        <ul key={todo.id}>
          <Todo
          key={todo.id}
          {...todo}
          onClick={() => toggleTodo(todo.id)}
          />
        </ul>
      )
  )
}


export default TodoList
