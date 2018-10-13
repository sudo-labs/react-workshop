import React, { Component } from 'react';

import './App.css';

class App extends Component {

  todos = ["Hi", "There", "How", "Are", "You"];

  render() {
    return (
      <div className="TodoApp">
        <h1>Todo List App</h1>
        <ul>
          {this.todos.map(makeListItem)}
        </ul>
      </div>
    );
  }
}

function makeListItem(text, key) {
  return (
    <li key={key}>
      {text} 
    </li>
  );
}

export default App;
