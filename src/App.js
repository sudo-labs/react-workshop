import React, { Component } from 'react';

import TodoList from './TodoList';
import './Todo.css';


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
        return {
          todos: prevState.todos.concat({
            id: `todo-${prevState.todos.length + 1}`,
            title: value,
          })
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

  handleEnterPress = (event) => {
    if (event.keyCode === 13) {
      this.addTodo();
    }
  }

  render() {
    return (
      <div className="TodoApp">
        <h1>Todo List App</h1>
        <div className="TodoApp--content">
          <input
            type="text"
            ref={(input) => this._todoInput = input}  
            className="TodoApp--input"
            placeholder="enter task"
            onKeyDown={this.handleEnterPress}
          />
          <button type="submit" className="TodoApp--button" onClick={this.addTodo} >
            add
          </button>
          <TodoList todos={this.state.todos} removeTodo={this.removeTodo} />
        </div>
      </div>
    );
  }
}

export default App;
