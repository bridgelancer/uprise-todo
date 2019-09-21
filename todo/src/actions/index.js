let nextId = 0;

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const EDIT_TODO = 'EDIT_TODO';

export const addTodo = text => ({
    type: ADD_TODO,
    id: nextId++,
    todo_text: text
})

export const toggleTodo = id => ({
    type: TOGGLE_TODO,
    id
})

export const editTodo = (id, text) => ({
    type: EDIT_TODO,
    id: id,
    todo_text: text,
})
