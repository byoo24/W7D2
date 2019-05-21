import React from 'react';
import TodoDetailView from './todo_details/todo_detail_view';

class TodoListItem extends React.Component {
    constructor(props){
        super(props);
        this.handleClick = this.handleClick.bind(this);
        this.toggleDone = this.toggleDone.bind(this);
        this.showDetail = this.showDetail.bind(this);
        this.state = { showdetail: false }
    }

    handleClick(){
        const { id } = this.props.todo;
        this.props.removeTodo(id);
    }

    showDetail(){
        const newState = this.state.showdetail ? false : true;
        this.setState({ showdetail: newState}); 
    }

    toggleDone(){
        const { id, done, title, body } = this.props.todo;
        const updatedDone = done ? false : true;
        const updatedTodo = { id, done: updatedDone, title, body };
        this.props.updateTodo(updatedTodo);
    }


    render() {
        const { done, title, body } = this.props.todo;
        const text = done ? "done" : "undo";

        const detail = this.state.showdetail ? <TodoDetailView body={body} /> : null;

        return (
            <div className="todos">
                <li onClick={this.showDetail}>
                    <h1 >{title} </h1>
                    <div className="buttons">   
                        <button onClick={this.toggleDone}>{text}</button>
                        <button onClick={this.handleClick}>Remove Todo</button>
                    </div>                  
                </li>
                {detail}
            </div>
            
        )
    }
}
export default TodoListItem;