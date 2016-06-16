import * as types from '../constants/actionTypes';

export function saveTodo(text) {
    return  {
        type: types.SAVE_TODO,
        text: text
    };
}

export function deleteTodo(id) {
    return {
        type: types.DELETE_TODO,
        id: id
    };
}

export function completeTodo(id) {
    return {
        type: types.COMPLETE_TODO,
        id: id
    };
}