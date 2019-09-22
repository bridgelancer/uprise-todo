import React from "react";
import EditTodo from "../containers/EditForm";

import Button from "@material-ui/core/Button";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";

function Todo({ id, todo_text, onToggle, onEdit, onDelete, completed }) {
  return (
    <>
      <TableCell>{id}</TableCell>
      <TableCell>{todo_text}</TableCell>
      <TableCell>{completed.toString()}</TableCell>

      <TableCell>
        <Button variant="contained" size="small" onClick={onToggle}>
          Toggle
        </Button>

        <EditTodo onEdit={onEdit} />

        <Button variant="contained" size="small" onClick={onDelete}>
          Delete
        </Button>
      </TableCell>
    </>
  );
}

export default Todo;
