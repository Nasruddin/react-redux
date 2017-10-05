import * as types from './actionTypes';
import todoApi from '../api/mockTodoApi';

export function loadTodosSuccess(todos) {
    return { type: types.LOAD_TODOS_SUCCESS, todos };
}

export function loadTodos() {
    return function (dispatch) {
        return todoApi.getAllTodos().then(todos => {
            dispatch(loadTodosSuccess(todos));
        }).catch(error => {
            throw(error);
        });
    };
}