import React from 'react'
import Todo from './Todo'

function TodoList(obj) {
  return (
    <ul>
      {obj.todos.map(todo =>
        <Todo
          key={todo.id}
          {...todo}
          onClick={() => obj.toggleToDo(todo.id)}
        />
      )}
    </ul>
  )
}


export default TodoList
