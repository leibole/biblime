import React, { Component } from 'react';
import HelloWorld from './HelloWorld';
import './HelloWorldList.css';
import AddGreeter from './AddGreeter';
import { PageHeader } from 'react-bootstrap'; 


class HelloWorldList extends Component {
  constructor(props) {
    super(props);
    this.state = { greetings: ['Jim', 'Sally', 'Bender'] };
    this.addGreeting = this.addGreeting.bind(this);
    this.removeGreeting = this.removeGreeting.bind(this);
  }
  renderGreetings() {
    return this.state.greetings.map(name => (
      <HelloWorld key={name} name={name} removeGreeting={this.removeGreeting} />
    ));
  }
  addGreeting(newName) {
  	this.setState({ greetings: [...this.state.greetings, newName] });
  }
  removeGreeting(removeName) {
	const filteredGreetings = this.state.greetings.filter(name => {
	  return name !== removeName;
	});
	this.setState({ greetings: filteredGreetings });
  }
  render() {
    return (
      <div className="HlloWorldList">
        <PageHeader>Example page header <small>Subtext for header</small></PageHeader>
      	<AddGreeter addGreeting={this.addGreeting} />
        {this.renderGreetings()}
      </div>
    );
  }
}
export default HelloWorldList;