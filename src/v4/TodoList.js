import React, { Component } from 'react';

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

export default TodoList;