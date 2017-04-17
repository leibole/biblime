import React, { Component } from 'react';
import { FormGroup, FormControl, ControlLabel, Form } from 'react-bootstrap';


class DataInput extends Component {
	constructor(props) {
    	super(props);
    	this.handleChange = this.handleChange.bind(this);
	}
	handleChange(event) {
    	this.props.changeCallback(event.target.id, event.target.value);
    	this.setState({value: event.target.value});
  	}
  render() {
	  return (
	  <Form inline>
		{
			this.props.field.map(function(field){
				return getFormField.call(this, field, this.props.field.length)
			}, this)
		}
	  </Form>
	  );
	}
}

function getFormField(field, numberOfFields) {
	return (
		// <div style={{"width": 100/numberOfFields + "%"}}>
	    <FormGroup style={{"width": 100/numberOfFields + "%"}} key={field}>
			<ControlLabel>{field}</ControlLabel>
			<br/>
	      <FormControl
	      	  id={field}
		      style={{"width": "100%"}}
		      type="text" 
		      placeholder={"To be filled"} 
		      onChange={this.handleChange}
	      />
	    </FormGroup>
	    // </div>
	);

}

export default DataInput;