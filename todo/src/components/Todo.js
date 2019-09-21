import React from 'react';
import Button from '@material-ui/core/Button';

function Todo({ id, todo_text, onClick, completed } ){

  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {id}, {todo_text}, {completed.toString()}
    <Button variant='contained' size='small'
            onClick={onClick}>
      Toggle
    </Button>

    </li>
  )
}

export default Todo
