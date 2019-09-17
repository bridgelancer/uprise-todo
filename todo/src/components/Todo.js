import React from 'react'

function Todo({ todo_text, onClick, completed } ){
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
