import React from 'react';

class TodoForm extends React.Component {
    constructor (props) {
        super(props)
        this.state = {title: "", body: "", done: false};
        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleChange(field) {
        return (e) => {
            e.preventDefault();
            this.setState({[field]: e.target.value})
        }
    }

    handleSubmit(e) {
        e.preventDefault();
        const todo = Object.assign({}, this.state, { id: new Date().getTime() });
        this.props.dispatchReceiveTodo(todo);
        this.setState({
            title: "",
            body: ""
        });
    }
    render(){


        return (
            <div>
            <form onSubmit={this.handleSubmit}>
            <label>
                Title
            <input onChange={this.handleChange("title")} type="text" value={this.state.title}/>
            </label>
            <label>
                Body
            <input onChange={this.handleChange("body")} type="text" value={this.state.body} />
            </label>

            <input  type="submit" value="create todo"/>

            </form>
            </div>
        )
    }
}

export default TodoForm;