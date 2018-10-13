import React, { Component } from 'react';

import TodoList from './TodoList';
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
      return {
        todos: prevState.todos.filter(t => t !== todo),
      }
    })
  }

  handleKeyDown = (event) => {
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
          onKeyDown={this.handleKeyDown}
        />
        <button 
          type="submit"
          onClick={this.addTodo} 
          onKeyPress={this.addTodo} 
        >
          add
        </button>
        <TodoList 
          todos={this.state.todos} 
          removeTodo={this.removeTodo} 
        />
      </div>
    );
  }
}

export default App;
