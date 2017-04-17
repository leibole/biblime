import React, { Component } from 'react';
import './HelloWorld.css';
import { Button } from 'react-bootstrap';

class HelloWorld extends Component {
  constructor(props) {
    super(props);
    this.state = { greeting: 'Helllllo' };
    this.frenchify = this.frenchify.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  removeGreeting() {
    this.props.removeGreeting(this.props.name);
  }
  frenchify() {
    this.setState({ greeting: 'Bonjour' });
  }
	render() {
	  return (
	    <div className="HelloWorld">
	      {this.state.greeting} {this.props.name}!
	      <br/>
	      <Button onClick={this.frenchify}>Frenchify!</Button>
	      <br/>
	      <Button onClick={this.removeGreeting}>Remove Me!</Button>
	    </div>
	  );
	}
}


export default HelloWorld;