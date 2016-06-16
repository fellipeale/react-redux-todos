import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todos.map((todo) => {
                        return <TodoItem key={todo.id} todo={todo} />;
                    })
                }
            </div>
        );
    }

}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList; 