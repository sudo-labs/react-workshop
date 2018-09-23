import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';


function TodoList ({todos, handleTodoClick}) {
	return (
		<ul className="TodoApp--list">
			{todos.map(todo => 
				<TodoListItem 
					key={todo.id}
					title={todo.title}
					handleClick={() => handleTodoClick(todo)}
				/>
			)}
		</ul>
	)
}

TodoList.propTypes = { 
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	})).isRequired,
	handleTodoClick: PropTypes.func.isRequired,
};

export default TodoList;