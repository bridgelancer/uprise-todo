import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import App from './components/App';
import todoApp from './reducers/'
import * as serviceWorker from './serviceWorker';


// import {
//   addTodo,
//   toggleTodo,
// } from './actions'
const store = createStore(todoApp);

// console.log(store.getState())
// const unsubscribe = store.subscribe(() => console.log(store.getState()))
//
// // Dispatch some actions
// store.dispatch(addTodo('First'))
// store.dispatch(addTodo('Second'))
// store.dispatch(addTodo('Third'))
// store.dispatch(toggleTodo(0))
// store.dispatch(toggleTodo(1))
// store.dispatch(toggleTodo(2))
//
// // Stop listening to state updates
// unsubscribe()

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
