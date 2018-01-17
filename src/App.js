import React, { Component } from 'react';
import {
        Hero,
        HeroBody,
        HeroHead,
        Container,
        Title,
        SubTitle
        } from 'reactbulma'

class App extends Component {
  render() {
    return (
      <React.Fragment>
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
