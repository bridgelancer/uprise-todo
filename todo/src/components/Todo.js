import React from 'react';
import Button from '@material-ui/core/Button';
import EditTodo from '../containers/EditForm';

function Todo({ id, todo_text, onToggle, onEdit, completed } ){

  return (
    <li
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
    {id}, {todo_text}, {completed.toString()}
    <Button variant='contained' size='small'
            onClick={onToggle}>
      Toggle
    </Button>

    <EditTodo onEdit={onEdit}/>
    </li>
  )
}

export default Todo
