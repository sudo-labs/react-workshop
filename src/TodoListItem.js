import React from 'react';
import PropTypes from 'prop-types';


function TodoListItem ({todo, removeTodo}) {
	const handleBackspacePress = (event) => {
		if (event.keyCode === 8) {
			removeTodo(todo);
		}
	}

	return (
		<li 
			className="TodoApp--list-item" 
			onClick={() => removeTodo(todo)} 
			onKeyDown={handleBackspacePress}
			tabIndex={0}
		>
			<div className="TodoApp--list-item--clear">
				&times;
			</div>	
			<div className="TodoApp--list-item--title">
				{todo.title}
			</div>
		</li>
	)
};

TodoListItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	}).isRequired,
	removeTodo: PropTypes.func.isRequired,
};

export default TodoListItem;