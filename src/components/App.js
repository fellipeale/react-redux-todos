import React, { Component } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import * as actions from '../actions/todoActions';

class App extends Component {
    render() {
        return (
            <div className="container">
                <TodoInput saveTodo={this.props.actions.saveTodo} />
                <hr />
                <TodoList todos={this.props.todos} deleteTodo={this.props.actions.deleteTodo} />
            </div>
        );
    }
}

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(App);