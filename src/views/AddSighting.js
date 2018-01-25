import React, { Component } from 'react';
import Header from 'components/Header';
import Calendar from 'components/Calendar/Calendar';
import {Container} from 'bloomer';

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
          <p>With <strong>KvaaK!</strong> you can checkout what birds have been spotted by your twitcher friends and report your own sightings!</p>
          <Calendar changeDate={this.changeDate} language="en"/>
        </Container>
      </ React.Fragment>
    );
  }
}

export default AddSighting;
