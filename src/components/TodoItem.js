import React, { Component, PropTypes } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-1 text-center">
                    <input type="checkbox" />
                </div>
                <div className="col-md-10">{this.props.todo.text}</div>
                <button className="btn btn-default col-md-1">x</button>
            </div>
        );
    }

}

TodoItem.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoItem; 