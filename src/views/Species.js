import React, { Component } from 'react';
import Header from 'components/Header';
import {Container} from 'bloomer';

class Species extends Component {
  render() {
    return (
      <React.Fragment>
        <Header title="Species" subtitle="Aww! Pretty mallard!" />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          <p>With <strong>KvaaK!</strong> you can checkout what birds have been spotted by your twitcher friends and report your own sightings!</p>
        </Container>
      </ React.Fragment>
    );
  }
}

export default Species;
