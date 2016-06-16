import React, { Component, PropTypes } from 'react';

class TodoInput extends Component {

    constructor(props, context) {
        super(props, context);

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleSubmit(event) {
        event.preventDefault();
        this.props.saveTodo(this.refs.todoText.value);
        this.refs.todoText.value = '';
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type="text" className="col-md-12" placeholder="type your todo here" ref="todoText" />
            </form>
        );
    }

}

TodoInput.propTypes = {
    saveTodo: PropTypes.func.isRequired
};

export default TodoInput; 