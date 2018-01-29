import React, { Component } from 'react';
import Header from 'components/Header';
import Calendar from 'components/Calendar/Calendar';
import {Container, Columns, Column, Field, Label, Control, Input, Select, TextArea} from 'bloomer';

class AddSighting extends Component {
  constructor (props) {
    super(props);
    this.state = {
      dateTime: undefined,
      species: undefined,
      count: undefined,
      description: undefined
    };
    this.handleDateChange = this.handleDateChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleDateChange = (date) => {
    //let jsonDate = JSON.stringify(date);
    //console.log(jsonDate);
    this.setState({ dateTime: date });
  }

  handleInputChange = (event) => {
    const value = event.target.value;
    const name = event.target.name
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    let url = 'http://localhost:8081/sightings';
    let jsonSighting = JSON.stringify({
      dateTime: this.state.dateTime,
      species: this.state.species,
      count: this.state.count,
      description: this.state.description
    });

    fetch(url, {
      method: 'POST',
      body: jsonSighting,
      headers: new Headers({
        'Content-Type': 'application/json'
      })
    }).then(response => response.json())
    .catch(error => console.error('Error:', error))
    .then(response => console.log('Success:', response));

    event.preventDefault();
  }

  render() {
    return (
      <React.Fragment>
        <Header title="Add Sighting" subtitle="Sharing is caring." />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          <form onSubmit={this.handleSubmit}>
            <Columns>
              <Column isSize="1/2" style={{ marginLeft: 15, maxWidth:400}}>
              <Field>
                <Label>Species:</Label>
                <Control>
                  <Select
                    name="species"
                    onChange={this.handleInputChange}>
                    <option value="mallard">Mallard</option>
                    <option value="mockingbird">Mockingbird</option>
                  </Select>
                </Control>
              </Field>
              <Field>
                <Label>Count</Label>
                <Control>
                  <Input
                    name="count"
                    type="number"
                    placeholder='Count'
                    onChange={this.handleInputChange}/>
                </Control>
              </Field>
              <Field>
                <Label>Description</Label>
                <Control>
                  <TextArea
                    name="description"
                    placeholder={'Description..'}
                    onChange={this.handleInputChange}/>
                </Control>
              </Field>
              <Field isDisplay='tablet' isHidden="mobile">
                <Control>
                  <input className="button is-primary" type="submit" value="Submit" />
                </Control>
              </Field>
              </Column>
              <Column isSize="1/2" style={{ marginLeft: 15, maxWidth:400 }}>
                <Calendar onChange={this.handleDateChange} language="en"/>
                <Field isDisplay='mobile' isHidden="tablet">
                  <Control>
                    <input className="button is-primary" type="submit" value="Submit" />
                  </Control>
                </Field>
              </Column>
            </Columns>
          </form>
        </Container>
      </ React.Fragment>
    );
  }
}

export default AddSighting;
