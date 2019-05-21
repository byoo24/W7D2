import { connect } from 'react-redux';
import { receiveTodo, createTodo } from '../../actions/todo_actions';
import TodoForm from './todo_form';

const msp = (state) => {
    return {
        errors: state.errors
    }
};

const mdp = dispatch => ({
    receiveTodo: (todo) => dispatch(receiveTodo(todo)),
    createTodo: (todo) => dispatch(createTodo(todo))
});


export default connect(msp, mdp)(TodoForm);