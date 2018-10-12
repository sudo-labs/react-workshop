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

  removeTodo = (todo) => {
    this.setState(prevState => {
      let updatedTodos = prevState.todos;
      
      if (updatedTodos.includes(todo)) {
        updatedTodos.splice(updatedTodos.indexOf(todo), 1);
      }

      return {
        todos: updatedTodos,
      }
    })
  }

  handleInputKeyDown = (event) => {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }

  handleTodoItemKeyDown = (event, todo) => {
    if (event.keyCode === 8) {
      this.removeTodo(todo);
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
          {this.state.todos.map(todo => 
            <li 
              key={todo.id}
              onClick={() => this.removeTodo(todo)} 
              onKeyDown={(e) => this.handleTodoItemKeyDown(e, todo)}
              tabIndex={0}
            >
              <span>
                &times;
              </span>  
              <div>
                {todo.title}
              </div>
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
