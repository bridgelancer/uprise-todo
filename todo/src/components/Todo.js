import React from 'react'

function Todo({ id, todo_text, onClick, completed } ){
  console.log('completed: ', completed)
  return (
    <li
      onClick={onClick}
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {id}, {todo_text}, {completed.toString()}
    </li>
  )
}

export default Todo
