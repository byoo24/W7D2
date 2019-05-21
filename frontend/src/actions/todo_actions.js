import * as TodoAPIUtil from '../util/todo_api_util';
export const RECEIVE_TODOS = 'RECEIVE_TODOS';
export const RECEIVE_TODO = 'RECEIVE_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
import { receiveErrors } from './error_actions';



const receiveTodos = (todos) => { //array of incoming
    return {
        type: RECEIVE_TODOS,
        todos
    };
};
    
const receiveTodo = (todo) => { // single todo object
    return {
        type: RECEIVE_TODO,
        todo
    };
};


const removeTodo = (id) => {
    return {
        type: REMOVE_TODO,
        id
    };
};



export const fetchTodos = () => {
    return (dispatch) => {
        return TodoAPIUtil.fetchTodos()
            .then((todos) => dispatch(receiveTodos(todos)));
    };
};


export const createTodo = (todo) => {
    return dispatch => {
        return TodoAPIUtil.createTodo(todo)
        .then(
            todo => {
                return dispatch(receiveTodo(todo))
            },
            err => {
                return dispatch(receiveErrors(err.responseJSON));
            }
        );
    };
};


export const deleteTodo = (id) => {
    return dispatch => {
        return TodoAPIUtil.deleteTodo(id).then(
            todo => dispatch(removeTodo(id))
        );
    };
};



export const updateTodo = (todo) => {
    return dispatch => {
        return TodoAPIUtil.updateTodo(todo).then(
            todo => dispatch(receiveTodo(todo))
        );
    };
};