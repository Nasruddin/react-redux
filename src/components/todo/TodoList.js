import React, { Component } from 'react';
import PropTypes from 'prop-types';
import TodoListRow from './TodoListRow';

const TodoList = ({ todos, deleteTodo }) => {
    return (
        <table className="table">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Title</th>
                </tr>
            </thead>
            <tbody>
            {todos.map(todo =>
                <TodoListRow key={todo.id} todo={todo} />
            )}
            </tbody>
        </table>
    );
};

TodoList.propTypes = {
    todos: PropTypes.array.isRequired
};

export default TodoList;