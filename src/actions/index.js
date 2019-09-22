let nextId = 0;

export const ADD_TODO = "ADD_TODO";
export const ADD_FETCHED_TODO = "ADD_FETCHED_TODO";
export const TOGGLE_TODO = "TOGGLE_TODO";
export const EDIT_TODO = "EDIT_TODO";
export const DELETE_TODO = "DELETE_TODO";

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextId++,
  todo_text: text
});

export const addFetchedTodo = (text, completed) => ({
  type: ADD_FETCHED_TODO,
  id: nextId++,
  todo_text: text,
  isComplete: completed
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});

export const editTodo = (id, text) => ({
  type: EDIT_TODO,
  id: id,
  todo_text: text
});

export const deleteTodo = id => ({
  type: DELETE_TODO,
  id: id
});
