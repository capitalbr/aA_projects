import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import { receiveTodos, receiveTodo } from "./actions/todo_actions"
import {Root} from "./components/root";
import {allTodos} from "./reducers/selectors"





document.addEventListener("DOMContentLoaded", () => {
    let main = document.getElementById("main");
    const store = configureStore();
    window.store = store;
    ReactDOM.render(<Root store={store}/>, main);
})


window.receiveTodos = receiveTodos;
window.receiveTodo = receiveTodo;
window.allTodos = allTodos;