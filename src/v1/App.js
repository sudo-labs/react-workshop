import React, { Component } from 'react';

import './App.css';

class App extends Component {

  todos = ["Hi", "There", "How", "Are", "You"];

  render() {
    return (
      <div className="TodoApp">
        <h1>Todo List App</h1>
        <ul>
          {this.todos.map(todo => 
            <li 
              key={todo}
              tabIndex={0}
            >
              {todo}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default App;
