import React, { Component } from 'react'

export default class TodoForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      text: ''
    }


  }

  handleSubmit = event => {
    event.preventDefault();

    this.props.addTodo(this.state.text);

    this.setState({text: ''});

  }

  render() {

    return (
    <form onSubmit={this.handleSubmit} >
    
      <input type='text' value={this.state.text} onChange={event => this.setState({text: event.target.value})} />

      <input type='submit' value='Add Todo' />
    
    </form>
    )
  }
}
