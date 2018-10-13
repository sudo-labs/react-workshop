import React, { Component } from 'react';

import './App.css';


class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: [],
    };
  }

  addTodo = (title) => {
    const value = this._todoInput.value;

    if (value) {
      this.setState(prevState => { 
        let updatedTodos = prevState.todos;

        updatedTodos.push({
          id: `todo-${prevState.todos.length + 1}`,
          title: value,
        });

        return {
          todos: updatedTodos
        }
      })

      this._todoInput.value = "";
    }
  }

  handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }

  render() {
    return (
      <div className="TodoApp">
        <h1>Todo List App</h1>
        <input
          type="text"
          ref={(input) => this._todoInput = input}  
          placeholder="enter task"
          onKeyDown={this.handleInputKeyDown}
        />
        <button 
          type="submit" 
          onClick={this.addTodo} 
          onKeyPress={this.addTodo} 
        >
          add
        </button>
        <ul>
          {this.state.todos.map(makeListItem)}
        </ul>
      </div>
    );
  }

}

function makeListItem(todo) {
  return (
    <li key={todo.id}>
      {todo.title} 
    </li>
  );
}

export default App;
