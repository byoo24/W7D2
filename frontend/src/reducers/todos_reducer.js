import { merge } from 'lodash';

import { RECEIVE_TODOS, RECEIVE_TODO, REMOVE_TODO } from "../actions/todo_actions";

const todosReducer = (state = {} , action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_TODOS:
            const newTodoObj = {};
            action.todos.forEach( todo => {
                newTodoObj[todo.id] = todo;
            });
            return newTodoObj;

        case RECEIVE_TODO:
            const todo = action.todo;
            const newTodo = {
                [todo.id]: todo
            };
            return merge({}, state, newTodo);

        case REMOVE_TODO:
            const id = action.id;
            const newState = merge({}, state);
            delete newState[id];
            return newState;

        default:
            return state;
    }
};


export default todosReducer;
