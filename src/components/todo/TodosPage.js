import React, { Component } from 'react';
import { PropTypes } from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as todoActions from '../../actions/todoAction';

class TodosPage extends React.Component {
    constructor(props, context) {
        super(props, context);

        this.state= {
            todo: { title: "" }
        };

        this.onTitleChange = this.onTitleChange.bind(this);
        this.onClickSave = this.onClickSave.bind(this);
    }

    onTitleChange(event) {
        const todo = this.state.todo;
        todo.title = event.target.value;
        this.setState({ todo: todo });
    }

    onClickSave() {
        this.props.actions.createTodo(this.state.todo);
    }

    todoRow(todo, index) {
        return <div key={index}>{todo.title}</div>;
    }

    render() {
        return (
            <div>
                <h1>Todos</h1>
                {this.props.todos.map(this.todoRow)}
                <h2>Add Todos</h2>
                <input
                    type="text"
                    onChange={this.onTitleChange}
                    value={this.state.todo.title} />

                <input
                    type="submit"
                    value="Save"
                    onClick={this.onClickSave}/>
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