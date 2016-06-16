import React, { Component } from 'react';

class TodoItem extends Component {

    render() {
        return (
            <div className="col-md-12">
                <div className="col-md-1 text-center">
                    <input type="checkbox"  />
                </div>
                <div className="col-md-10">To-Do</div>
                <button className="btn btn-default col-md-1">x</button>
            </div>
        );
    }

}

export default TodoItem; 