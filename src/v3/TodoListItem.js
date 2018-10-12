import React, { Component } from 'react';
import PropTypes from 'prop-types';


class TodoListItem extends Component {
	handleKeyDown = (event) => {
		const { todo, removeTodo } = this.props;

		if (event.keyCode === 8) {
			removeTodo(todo);
		}
	}

	render() {
 		const { todo, removeTodo } = this.props;

		return (
			<li 
				className="TodoApp--list-item" 
				onClick={() => removeTodo(todo)} 
				onKeyDown={this.handleKeyDown}
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
	}
}

TodoListItem.propTypes = {
	todo: PropTypes.shape({
		id: PropTypes.string,
		title: PropTypes.string,
	}).isRequired,
	removeTodo: PropTypes.func.isRequired,
};

export default TodoListItem;