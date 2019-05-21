import React from 'react';
import { Provider } from 'react-redux';
// import * as TodoAPIUtil from '../util/todo_api_util';
import { fetchTodos } from '../actions/todo_actions.js'

// Redux
import store from '../store/store';

// Reducers
import rootReducer from '../reducers/root_reducer.js';
import { receiveTodo, receiveTodos } from '../actions/todo_actions';
import { allTodos } from '../reducers/selectors';
import TodoList from './todos/todo_list_container.jsx';




const App = () => (
    <>
    <div className="app">
        <Provider store={store}>
            <h1>Hello from App!</h1>
            <TodoList />
        </Provider>
    </div>
    
    </>
)


export default App;
window.rootReducer = rootReducer;
window.store = store;
window.receiveTodo = receiveTodo;
window.receiveTodos = receiveTodos;
window.allTodos = allTodos;
window.fetchTodos = fetchTodos;