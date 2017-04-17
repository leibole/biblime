import React, { Component } from 'react';
import './AddGreeter.css';
import { Button } from 'react-bootstrap';

class AddGreeter extends Component {
  constructor(props) {
    super(props);
    this.state = { greetingName: '' };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.addGreeting = this.addGreeting.bind(this);
  }
  handleUpdate(event) {
    this.setState({ greetingName: event.target.value });
  }
  addGreeting() {
    this.props.addGreeting(this.state.greetingName);
    this.setState({ greetingName: '' });
  }
  render() {
    return (
      <div className="AddGreeter">
        <input
          type="text"
          onChange={this.handleUpdate}
          value={this.state.greetingName}
        />
        &nbsp;&nbsp;
        <Button onClick={this.addGreeting}>Add</Button>
      </div>
    );
  }
}

export default AddGreeter;