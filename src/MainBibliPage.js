import React, { Component } from 'react';
import { PageHeader, Grid, Col, Button, Panel } from 'react-bootstrap'; 
import DataInput from './DataInput';
import DataOutput from './DataOutput';
import update from 'react-addons-update';


function buildCitation(fields) {  
  return fields[AUTHOR_LAST_NAME] + ", " + fields[AUTHOR_FIRST_NAME].charAt(0) + ". "
  + fields[YEAR] + ". "
  + fields[TITLE] + ". "
  + fields[PUBLICATION] + ": " + fields[PUBLICATION_LOCATION] + ".";
}

class MainBibliPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentCitation: buildCitation(FIELD_INITIAL_VALUES),
      allCitations: [],
      citationFields: FIELDS,
      citationValues: FIELD_INITIAL_VALUES
    }
    this.handleInputChange = this.handleInputChange.bind(this);
    this.addItem = function() {
      if (this.state.allCitations.includes(this.state.currentCitation)) return;
      var newCitationArray = this.state.allCitations;
      newCitationArray.push(this.state.currentCitation);
      this.setState({allCitations: newCitationArray});
      this.setState({currentCitation: buildCitation(FIELD_INITIAL_VALUES)});
    }
  }
  handleInputChange(field, newInput) {
    var newCitationValues = update(this.state.citationValues, {[field]: {$set: newInput}});
    this.setState({citationValues: newCitationValues});
    this.setState({currentCitation: buildCitation(newCitationValues)});
  }
  render() {
    return (
      <Grid>
        <PageHeader>Bibliography creator <small>Create APA perfect citation</small></PageHeader>
      <Col xs={12} md={6}>
        {this.state.citationFields.map(function(field, i) {
          return <DataInput changeCallback={this.handleInputChange} key={field} field={field}/>
        }, this)}
        <Button 
          bsStyle="primary"
          style={{'margin-top': '5px'}}
          onClick={this.addItem.bind(this)}
        >
          Save Citation
        </Button>
      </Col>
      <Col xs={12} md={6}>
        <h4>Current Citation:</h4>
        <DataOutput input={this.state.currentCitation}/>
        <br/>
        <Panel header="Your Bibliography" bsStyle="primary">
          {this.state.allCitations.map(function(citation, i) {
            return <DataOutput input={citation} key={citation}/>
          }, this)}
        </Panel>
      </Col>
      </Grid>
    );
  }
}



const YEAR = "Year",
TITLE = "Title",
AUTHOR_FIRST_NAME = "Author First Name",
AUTHOR_LAST_NAME = "Author Last Name",
PUBLICATION = "Publication",
PUBLICATION_LOCATION = "Publication Location", 

FIELDS = [
  [YEAR],
  [TITLE],
  [AUTHOR_FIRST_NAME, AUTHOR_LAST_NAME],
  [PUBLICATION, PUBLICATION_LOCATION]
],
FIELD_INITIAL_VALUES = {};
FIELD_INITIAL_VALUES[YEAR] = 2000;
FIELD_INITIAL_VALUES[TITLE] = "Some Title";
FIELD_INITIAL_VALUES[AUTHOR_FIRST_NAME] = "John";
FIELD_INITIAL_VALUES[AUTHOR_LAST_NAME] = "Doe";
FIELD_INITIAL_VALUES[PUBLICATION] = "Some book publication";
FIELD_INITIAL_VALUES[PUBLICATION_LOCATION] = "London";
export default MainBibliPage;


/*
TODO:
- Add remove button to items.
- Disable save button if nothing is changed since last save.
- Try to break down this file into smaller files.
- Add firebase for login and saving list.
- Add copy list button to copy list to clipboard.
- Deploy to Heroku or whatever.

*/