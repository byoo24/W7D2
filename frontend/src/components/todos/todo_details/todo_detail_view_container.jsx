import { connect } from 'react-redux';

import TodoDetailView from './todo_detail_view';

import { removeTodo } from '../../../actions/todo_actions';


const mdp = dispatch => ({
    removeTodo: (todo) => dispatch(removeTodo(todo))
});



export default connect(null, mdp)(TodoDetailView);