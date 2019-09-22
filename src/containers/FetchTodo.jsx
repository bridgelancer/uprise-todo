import React from "react";
import { connect } from "react-redux";
import { addFetchedTodo } from "../actions";

const url = "https://jsonplaceholder.typicode.com/todos";

function dispatchFetchedTodo(dispatch, todos) {
  let kept_todos = todos.slice(0, 50);

  for (let key in kept_todos) {
    let todo = kept_todos[key];
    dispatch(addFetchedTodo(todo.title, todo.completed));
  }
}

function FetchTodo({ dispatch }) {
  fetch(url)
    .then(data => {
      return data.json();
    })
    .then(res => {
      dispatchFetchedTodo(dispatch, res);
    });

  return <div></div>;
}

export default connect()(FetchTodo);
