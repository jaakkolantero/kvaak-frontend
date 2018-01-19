import React, { Component } from 'react';
import {Hero, HeroBody, Container, Title, Subtitle} from 'bloomer'
import { string } from 'prop-types'

class Header extends Component {
  static propTypes = {
    title: string,
    subtitle: string
  };

  static defaultProps = {
    title: "title",
    subtitle: "subtitle"
  }
  
  render() {
    const {
      title,
      subtitle
    } = this.props
    return(
      <Hero isColor="primary">
        <HeroBody>
          <Container>
            <Title>{title}</Title>
            <Subtitle>{subtitle}</Subtitle>
          </Container>
        </ HeroBody>
      </Hero>
    );
  }
}

export default Header;
