import React from "react";
import Todo from "./Todo.jsx";

import { makeStyles, useTheme } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableHead from "@material-ui/core/TableHead";
import TableBody from "@material-ui/core/TableBody";
import TableRow from "@material-ui/core/TableRow";
import TableCell from "@material-ui/core/TableCell";
import TableFooter from "@material-ui/core/TableFooter";
import TablePagination from "@material-ui/core/TablePagination";

import IconButton from "@material-ui/core/IconButton";
import FirstPageIcon from "@material-ui/icons/FirstPage";
import KeyboardArrowLeft from "@material-ui/icons/KeyboardArrowLeft";
import KeyboardArrowRight from "@material-ui/icons/KeyboardArrowRight";
import LastPageIcon from "@material-ui/icons/LastPage";

const usePaginationStyle = makeStyles(theme => ({
  root: {
    flexShrink: 0,
    marginLeft: theme.spacing(2.5)
  }
}));

const useTableStyle = makeStyles(theme => ({
  footer: {
    minWidth: 1000
  }
}));

// need to modify
function TablePaginationActions({ count, page, rowsPerPage, onChangePage }) {
  const classes = usePaginationStyle();
  const theme = useTheme();

  console.log("count: ", count);

  function handleFirstPageButtonClick(event) {
    onChangePage(event, 0);
  }

  function handleBackButtonClick(event) {
    onChangePage(event, page - 1);
  }

  function handleNextButtonClick(event) {
    onChangePage(event, page + 1);
  }

  function handleLastPageButtonClick(event) {
    onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
  }

  return (
    <div className={classes.root}>
      <IconButton onClick={handleFirstPageButtonClick} disabled={page === 0}>
        {theme.direction === "rtl" ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>

      <IconButton onClick={handleBackButtonClick} disabled={page === 0}>
        {theme.direction === "rtl" ? (
          <KeyboardArrowRight />
        ) : (
          <KeyboardArrowLeft />
        )}
      </IconButton>

      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? (
          <KeyboardArrowLeft />
        ) : (
          <KeyboardArrowRight />
        )}
      </IconButton>

      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
      >
        {theme.direction === "rtl" ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </div>
  );
}

function TodoList({ todos, toggleTodo, editTodo, deleteTodo }) {
  const classes = useTableStyle();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);

  const rows = todos.map(todo => (
    <Todo
      key={todo.id}
      {...todo}
      onToggle={() => toggleTodo(todo.id)}
      onEdit={text => editTodo(todo.id, text)}
      onDelete={() => deleteTodo(todo.id)}
    />
  ));

  function handleChangePage(event, newPage) {
    setPage(newPage);
  }

  function handleChangeRowsPerPage(event) {
    setRowsPerPage(parseInt(event.target.value));
    setPage(0);
  }

  return (
    <Table className={classes.table}>
      <TableHead>
        <TableRow>
          <TableCell>id</TableCell>
          <TableCell>Text</TableCell>
          <TableCell>Completed</TableCell>
          <TableCell>Options</TableCell>
        </TableRow>
      </TableHead>

      <TableBody>
        {rows
          .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
          .map(row => (
            <TableRow key={row.id}>{row}</TableRow>
          ))}
      </TableBody>

      <TableFooter className={classes.footer}>
        <TableRow>
          <TablePagination
            rowsPerPageOptions={[3, 5, 10]}
            colSpan={4}
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            SelectProps={{
              native: true
            }}
            onChangePage={handleChangePage}
            onChangeRowsPerPage={handleChangeRowsPerPage}
            ActionsComponent={TablePaginationActions}
          />
        </TableRow>
      </TableFooter>
    </Table>
  );
}

export default TodoList;
