import React from 'react';
import PropTypes from 'prop-types';


function TodoListItem ({todo, removeTodo}) {
	const handleKeyDown = (event) => {
		if (event.keyCode === 8) {
			removeTodo(todo);
		}
	}

	return (
		<li 
			onClick={() => removeTodo(todo)} 
			onKeyDown={handleKeyDown}
			tabIndex={0}
		>
			<span>
				&times;
			</span>	
			<div>
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