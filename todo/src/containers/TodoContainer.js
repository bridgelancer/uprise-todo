import { connect } from 'react-redux'
import { toggleTodo } from '../actions'
import TodoList from '../components/TodoList'

const getIncompleteTodos = (todos) => {
  return todos.filter(t => !t.completed)
}

const mapStateToProps = state => ({
  todos: getIncompleteTodos(state.todos)
})

const mapDispatchToProps = dispatch => ({
  toggleTodo: id => dispatch(toggleTodo(id))
})

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)
