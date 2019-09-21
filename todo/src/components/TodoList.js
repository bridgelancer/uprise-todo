import React from 'react'
import Todo from './Todo'

function TodoList({todos, toggleTodo, editTodo}) {
  return (
      todos.map(todo =>
        <ul key={todo.id}>
          <Todo
          key={todo.id}
          {...todo}
          onToggle={() => toggleTodo(todo.id)}
          onEdit={(text) => editTodo(todo.id, text)}

          />
        </ul>
      )
  )
}


export default TodoList
