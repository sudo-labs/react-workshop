import React from 'react';
import PropTypes from 'prop-types';


function Todo ({title, handleClick}) {
	return (
		<li className="TodoApp--list-item" onClick={handleClick} tabIndex={0}>
			<div className="TodoApp--list-item--clear">
				&times;
			</div>	
			<div className="TodoApp--list-item--title">
				{title}
			</div>
		</li>
	)
};

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default Todo;