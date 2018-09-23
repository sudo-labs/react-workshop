import React from 'react';
import PropTypes from 'prop-types';


function TodoListItem ({title, handleClick}) {
	const handleBackspacePress = (event) => {
		if (event.keyCode === 8) {
			handleClick();
		}
	}

	return (
		<li 
			className="TodoApp--list-item" 
			onClick={handleClick} 
			onKeyDown={handleBackspacePress}
			tabIndex={0}
		>
			<div className="TodoApp--list-item--clear">
				&times;
			</div>	
			<div className="TodoApp--list-item--title">
				{title}
			</div>
		</li>
	)
};

TodoListItem.propTypes = {
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default TodoListItem;