import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';

class App extends Component {

    render() {
        return (
            <div className="container">
                <TodoInput />
                <hr />
                <TodoList />
            </div>
        );
    }

}

export default App; 