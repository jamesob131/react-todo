import React, { Component } from 'react';
import './App.css';
import Todos from './components/Todos';
import Header from './components/layout/Header';
import AddTodo from './components/AddTodo';
import uuid from 'uuid';

class App extends Component {
  state = {
    todos: [
      {
        id: uuid.v4(), 
        title: 'Take out the trash',
        completed: false

      },
      {
        id: uuid.v4(), 
        title: 'Make dinner',
        completed: false

      },
      {
        id: uuid.v4(), 
        title: 'complete react app',
        completed: false

      }
    ]
  }
  
  // Toggle Complete
  markComplete = (id) =>{
    this.setState({todos: this.state.todos.map(todo => {
      if(todo.id === id){
        todo.completed = !todo.completed
      }
      return todo;
    }) });
  }

  // Deletes a todo item
  delTodo = (id) => {
    this.setState({ todos: [...this.state.todos.filter(todo => todo.id 
      !== id)] });
  }

  // Add a todo item
  addTodo = (title) => {
    const newTodo = {
      id: uuid.v4(),
      title,
      completed: false
    }
    this.setState({todos: [...this.state.todos, newTodo]});
  }

  // RENDER THE PAGE
  render() {
    return (
      <div className="App">
        <div className="container">
          
          <Header />
          <AddTodo addTodo={this.addTodo} />
          <Todos todos={this.state.todos} markComplete={this.markComplete}
          delTodo={this.delTodo} />

        </div>

      </div>
    );
  }
}

export default App;
