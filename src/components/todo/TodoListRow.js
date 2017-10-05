import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const TodoListRow = ({todo}) => {
    return (
        <tr>
            <td>{todo.id}</td>
            <td><Link to={'/todo/' + todo.id}>{todo.title}</Link></td>
        </tr>
    );
};

TodoListRow.propTypes = {
    todo: PropTypes.object.isRequired
};

export default TodoListRow;