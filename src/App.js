import React, { Component } from 'react';
import Navigation from './components/Navigation';
import {Hero, Container, Title, SubTitle} from 'reactbulma'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Navigation />
        <Hero primary>
          <Hero.Body>
            <Container>
              <Title>
                KvaaK!
              </Title>
              <SubTitle>
                Meeting point for serious <strong>twitchers</strong>!
              </SubTitle>
            </Container>
          </Hero.Body>
        </Hero>
      </React.Fragment>
    );
  }
}

export default App;
