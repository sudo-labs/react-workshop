import React, { Component } from 'react';


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
				onClick={() => removeTodo(todo)} 
				onKeyDown={this.handleKeyDown}
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
	}
}

export default TodoListItem;