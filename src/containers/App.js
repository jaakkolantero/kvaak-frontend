import React, { Component } from 'react';
import Navigation from 'components/Navigation';
import { Container, Hero, HeroBody, Title, Subtitle } from 'bloomer';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Hero isColor='primary'>
          <HeroBody>
            <Container>
              <Title>Welcome to KvaaK!</Title>
              <Subtitle>Platform for serious twitchers!</Subtitle>
            </Container>
          </ HeroBody>
        </Hero>
      </React.Fragment>
    );
  }
}

export default App;
