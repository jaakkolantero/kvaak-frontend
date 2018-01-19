import React, { Component } from 'react';
import {Footer as Foot, Container, Content} from 'bloomer';

class Footer extends Component {
  render() {
    return(
      <Foot id='footer'>
        <Container>
          <Content hasTextAlign='centered'>
            <p>
              <strong>KvaaK!</strong> by <a href="https://terokoodaa.io">Tero Jaakkola</a>. <br />
              <a className="is-inverted is-outlined is-small" href="https://github.com/terokoodaa">
                <span className="icon is-large">
                  <i className="fa fa-2x fa-github"></i>
                </span>
              </a>
            </p>
          </Content>
        </Container>
      </Foot>
    );
  }
}

export default Footer;
