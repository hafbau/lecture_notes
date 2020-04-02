import React, { Component } from 'react'
import TodoForm from './TodoForm';
import TodoList from './TodoList';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      user: {name: "SpongeBob"},
      todos: [
        {
          id: 1,
          task: "Walk the Dog",
          completed: true
        },
        {
          id: 2,
          task: "Go for aa run",
          completed: false
        },
        {
          id: 3,
          task: "Get a coffee",
          completed: false
        },
      ]
    }
  }

  addTodo = task => {

    const newTodo = {
      id: Math.random().toString(36).substr(2,6),
      task,
      completed: false
    }

    this.setState({
      todos: [...this.state.todos, newTodo]
    })

  }

  deleteTodo = id => {

    this.setState({
      todos: [...this.state.todos.filter(todo => todo.id !== id )]
    })

  }

  checkItem = id => {

    this.setState({
      todos: [...this.state.todos.map(todo => {

        if(todo.id === id) {
          todo.completed = !todo.completed
        }

        return todo;

      })]
    })

  }

  componentDidMount() {
    // create any axios request

  }

  render() {
    return (
      <div>
      
      <TodoList todos={this.state.todos} deleteTodo={this.deleteTodo} checkItem={this.checkItem} />
      <TodoForm addTodo={this.addTodo} />
      </div>
    )
  }
}
