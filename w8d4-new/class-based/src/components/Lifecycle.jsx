import React, { Component } from 'react';

const Lifecycle = class extends Component {
  constructor() {
    super();
    this.state = {
      title: '',
    }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({ title: e.target.value });
  }

  render() {
    return (
      <div>
        <h2>Lifecycle</h2>
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={this.state.title}
          onChange={this.handleChange}
        />
      </div>
    );
  }
};

export default Lifecycle;
