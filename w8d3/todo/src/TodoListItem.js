import React, { Component } from 'react'
import './TodoListItem.css';

export default class TodoListItem extends Component {
  
  constructor(props) {
    super(props);

    this.state = {
      completed: this.props.completed
    }

  }

  handleDelete = () => {

console.log("delete");

    this.props.deleteTodo(this.props.id);
    


  }

  handleClick = () => {
    this.props.checkItem(this.props.id)
  }

  render() {
    return (
      <li>
      
        <input onClick={this.handleClick} type='checkbox' checked={this.state.completed} onChange={() => this.setState({completed: !this.state.completed})}/> <label style={ this.state.completed ? {textDecoration: 'line-through'} : null}>{this.props.task}</label> <button onClick={this.handleDelete}>x</button> 
      
      </li>
    )
  }
}
