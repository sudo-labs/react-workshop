import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Todo extends Component {
	render() {
		const { title, handleClick } = this.props;
		return (
			<div className="todo" onClick={handleClick}>
				{title}
			</div>
		);
	}
};

Todo.propTypes = {
	title: PropTypes.string.isRequired,
	handleClick: PropTypes.func.isRequired,
};

export default Todo;