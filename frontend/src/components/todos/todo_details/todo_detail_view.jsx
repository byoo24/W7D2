import React from 'react';

class TodoDetailView extends React.Component{
    render(){
        return <h1> {this.props.body} </h1>
    }
}

export default TodoDetailView;