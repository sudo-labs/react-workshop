import React, { Component } from 'react';
import Todo from './Todo';
import './Todo.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      todos: []
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
    const updatedTodos = this.state.todos;

    if (updatedTodos.includes(todo)) {
      updatedTodos.splice(updatedTodos.indexOf(todo), 1);
    }

    this.setState({
      todos: updatedTodos,
    })
  }

  render() {
    return (
      <div className="App">
        <h1>Todo list app</h1>
        <input
          type="text"
          ref={(a) => this._todoInput = a}  
          placeholder="enter todo"
        />
        <button
          type="submit"
          onClick={this.addTodo}
        >
          add
        </button>
        {this.state.todos.map(todo => 
          <Todo key={todo.id} title={todo.title} handleClick={() => this.removeTodo(todo)} />
        )}
      </div>
    );
  }
}

export default App;
