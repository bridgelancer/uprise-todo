import { connect } from "react-redux";
import { toggleTodo, editTodo, deleteTodo } from "../actions";
import TodoList from "../components/TodoList";

const mapStateToProps = state => ({
  todos: todos
});

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id)),
  editTodo: (id, text) => dispatch(editTodo(id, text)),
  deleteTodo: id => dispatch(deleteTodo(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
