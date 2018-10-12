import React from 'react';
import PropTypes from 'prop-types';

import TodoListItem from './TodoListItem';


function TodoList ({todos, removeTodo}) {
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

TodoList.propTypes = { 
	todos: PropTypes.arrayOf(PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	})).isRequired,
	removeTodo: PropTypes.func.isRequired,
};

export default TodoList;