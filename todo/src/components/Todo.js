import React from 'react'

function Todo(onClick, completed, todo_text){
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {todo_text}
    </li>
  )
}

export default Todo
