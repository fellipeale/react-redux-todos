import React, { Component, PropTypes } from 'react';
import TodoItem from './TodoItem';

class TodoList extends Component {

    render() {
        return (
            <div className="todo-list">
                {
                    this.props.todos.map((todo) => {
                        return (
                            <TodoItem 
                                key={todo.id} 
                                todo={todo} 
                                deleteTodo={this.props.deleteTodo}
                                completeTodo={this.props.completeTodo} />
                        );
                    })
                }
            </div>
        );
    }

}

TodoList.propTypes = {
    todos: PropTypes.array.isRequired,
    deleteTodo: PropTypes.func.isRequired,
    completeTodo: PropTypes.func.isRequired
};

export default TodoList; 