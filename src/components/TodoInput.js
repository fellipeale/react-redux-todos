import React, { Component } from 'react';

class TodoInput extends Component {

    render() {
        return (
            <form>
                <input type="text" className="col-md-12" placeholder="type your todo here" />
            </form>
        );
    }

}

export default TodoInput; 