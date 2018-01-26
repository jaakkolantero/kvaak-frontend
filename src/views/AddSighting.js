import React, { Component } from 'react';
import Header from 'components/Header';
import Calendar from 'components/Calendar/Calendar';
import {Container, Columns, Column, Field, Label, Control, Input, Select, TextArea, Button} from 'bloomer';

class AddSighting extends Component {
  constructor (props) {
    super(props);
    this.state = {
      date: new Date(),
    };
    this.changeDate = this.changeDate.bind(this);
  }

  changeDate = (date) => {
    this.setState({ date: date });
  }

  render() {
    console.log("this is in parent " + this.state.date);
    return (
      <React.Fragment>
        <Header title="Add Sighting" subtitle="Sharing is caring." />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          <Columns isCentered>
            <Column isSize='1/2' style={{ marginLeft: 15 }}>
            <Field>
              <Label>Species:</Label>
              <Control>
                <Select>
                  <option>Mallard</option>
                  <option>Mockingbird</option>
                </Select>
              </Control>
            </Field>
            <Field>
              <Label>Count</Label>
              <Control>
                <Input  type="number" placeholder='Count' />
              </Control>
            </Field>
            <Field>
              <Label>Description</Label>
              <Control>
                <TextArea placeholder={'Description..'} />
              </Control>
            </Field>
            <Field isGrouped>
              <Control>
                <Button isColor='primary'>Submit</Button>
              </Control>
            </Field>
            </Column>
            <Column isSize='1/2' style={{ marginLeft: 15 }}>
              <Calendar changeDate={this.changeDate} language="en"/>
            </Column>
          </Columns>
        </Container>
      </ React.Fragment>
    );
  }
}

export default AddSighting;
