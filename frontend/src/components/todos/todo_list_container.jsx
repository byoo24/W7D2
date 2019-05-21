import { connect } from 'react-redux';
import TodoList from './todo_list';
import { fetchTodos } from '../../actions/todo_actions'
import { allTodos } from '../../reducers/selectors';
import { receiveTodo, deleteTodo, updateTodo } from '../../actions/todo_actions';



const msp = state => ({
    todos: allTodos(state)
});


const mdp = dispatch => ({
    getTodos: () => dispatch(fetchTodos()),
    updateTodo: (todo) => dispatch(updateTodo(todo)),
    receiveTodo: (todo) =>  dispatch(receiveTodo(todo)) ,
    removeTodo: (todo) => dispatch(deleteTodo(todo))
});



export default connect(msp, mdp)(TodoList);