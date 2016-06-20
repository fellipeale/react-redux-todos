import *  as types from '../constants/actionTypes';
import objectAssign from 'object-assign';
import initialState from './initialState';

function getId(todos) {
  return todos.reduce((maxId, todo) => {
    return Math.max(todo.id, maxId);
  }, -1) + 1;
}

function todoReducer(state = initialState.todos, action) {
    switch (action.type) {
        case types.SAVE_TODO:
            return [{
                id: getId(state),
                text: action.text,
                completed: false
            }, ...state];
        case types.DELETE_TODO:
            return state.filter((todo) => {
                return todo.id != action.id;
            });
        case types.COMPLETE_TODO:
            return state.map((todo) => {
                return todo.id === action.id ? 
                    objectAssign({}, todo, {completed: action.completed}) : todo;
            });
        default:
            return state;
    }
}

export default todoReducer;