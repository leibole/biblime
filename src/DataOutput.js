import React, { Component } from 'react';
import { ListGroup, ListGroupItem, ControlLabel } from 'react-bootstrap';


class DataOutput extends Component {
  constructor(props) {
    super(props);
	}
  render() {
	  return (
	    <ListGroupItem>{this.props.input}</ListGroupItem>
	  );
	}
}

export default DataOutput;