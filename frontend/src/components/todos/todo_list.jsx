import React from 'react';
import TodoListItem from './todo_list_item';
import TodoForm from './todo_form_container';


class TodoList extends React.Component{
    componentDidMount(){
        this.props.getTodos();
    }

    render(){
        const todos = this.props.todos.map( (todo, index) => <TodoListItem updateTodo={this.props.updateTodo} key={index} todo={todo} receiveTodo={this.props.receiveTodo} removeTodo={this.props.removeTodo}/>)

        return (
            <>
            <h1>Todo List</h1>
            <ul>
                {todos}
            </ul>

            <TodoForm />
            </>
        )
    }
}

export default TodoList;