import React from 'react'
import Todo from './Todo'

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';
import TableRow from '@material-ui/core/TableRow';
import TableCell from '@material-ui/core/TableCell';

function TodoList({todos, toggleTodo, editTodo}) {
  const rows = todos.map(todo => (<Todo
                        key={todo.id}
                        {...todo}
                        onToggle={() => toggleTodo(todo.id)}
                        onEdit={(text) => editTodo(todo.id, text)}
                      />
                  )
              )
  console.log(rows)
  return (
      <Table>
        <TableHead>
            <TableRow>
              <TableCell>id</TableCell>
              <TableCell>Text</TableCell>
              <TableCell>Completed</TableCell>
            </TableRow>
        </TableHead>

        <TableBody>
            {rows.map((currentTodo) => (<TableRow> {currentTodo} </TableRow>))}
        </TableBody>
      </Table>
  )
}

export default TodoList
