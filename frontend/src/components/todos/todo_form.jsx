import React, {Component} from 'react';

class TodoForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            title: "",
            body: "",
            id: Math.floor(Math.random() * 10000),
            done: false,
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        this.props.createTodo(this.state);
        this.setState({
            title: "",
            body: "",
            id: Math.floor(Math.random() * 10000),
            done: false,
        });
    }

    update(field) {
        return e => {
            this.setState({ [field]: e.target.value });
        };
    }
    
    render() {
        const errors = this.props.errors.map( error => <h3>{error}</h3>);
        return (
            <form className="add-form" onSubmit={this.handleSubmit}>
                {errors} 
                <label>
                    Title:
                    <input 
                        type="text"
                        onChange={this.update("title")}
                        value={this.state.title}/>
                </label>

                <label>
                    Body:
                    <input
                        type="text"
                        onChange={this.update("body")}
                        value={this.state.body} />
                </label>

                <input type="submit" value="Add New Todo"/>
            </form>
        );
    }
}


export default TodoForm;