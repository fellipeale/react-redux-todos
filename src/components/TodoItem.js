import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {

    constructor() {
        super();

        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete() {
        this.props.deleteTodo(this.props.todo.id);
        console.log(this.props.todo.id);
    }

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-1 text-center">
                    <input type="checkbox" />
                </div>
                <div className="col-md-10">{this.props.todo.text}</div>
                <button className="btn btn-default col-md-1" onClick={this.handleDelete}>x</button>
            </div>
        );
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired,
    deleteTodo: PropTypes.func.isRequired
};

export default TodoItem; 