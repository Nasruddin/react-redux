import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoAction';
import TodoList from './TodoList';

class TodosPage extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    todoRow(todo, index) {
        return <div key={index}>{todo.title}</div>;
    }

    render() {
        const {todos} = this.props;
        return (
            <div>
                <h1>Todos</h1>
                <TodoList todos={todos} />
            </div>
        );
    }
}

TodosPage.propTypes = {
    todos: PropTypes.array.isRequired,
    actions:PropTypes.object.isRequired
};

function mapStateToProps(state, ownProps) {
    return {
        todos: state.todos
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(todoActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(TodosPage);