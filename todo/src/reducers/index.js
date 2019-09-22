import { combineReducers } from 'redux';
import {
  ADD_TODO,
  ADD_FETCHED_TODO,
  TOGGLE_TODO,
  EDIT_TODO,
  DELETE_TODO
} from '../actions';

function todos(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          todo_text: action.todo_text,
          completed: false
        }
      ]

    case ADD_FETCHED_TODO:
      return [
        ...state,
        {
          id: action.id,
          todo_text: action.todo_text,
          completed: action.isComplete
        }
      ]

    case TOGGLE_TODO:
      return state.map((todo) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            completed: !todo.completed
          });
        }
        return todo;
      })

    case EDIT_TODO:
      return state.map((todo, id) => {
        if (todo.id === action.id) {
          return Object.assign({}, todo, {
            todo_text: action.todo_text
          });
        }
        return todo;
      })

    case DELETE_TODO:
      console.log(state, action.id)
      return state.filter((todo) => todo.id !== action.id)

    default:
      return state;
  }
}

const todoApp = combineReducers({
  todos
})

export default todoApp
