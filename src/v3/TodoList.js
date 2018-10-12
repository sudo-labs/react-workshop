import React, { Component } from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';


class TodoList extends Component {
	render() {
		const { todos, removeTodo } = this.props;

		return (
			<ul>
				{todos.map(todo => 
					<TodoListItem 
						key={todo.id}
						todo={todo}
						removeTodo={removeTodo}
					/>
				)}
			</ul>
		)
	}
}

TodoList.propTypes = { 
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	})).isRequired,
	removeTodo: PropTypes.func.isRequired,
};

export default TodoList;