import React, { Component } from 'react';

class Header extends Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="title">
        {this.props.title}
      </h1>
      <h2 className="subtitle">
        {this.props.subtitle}
      </h2>
      </ React.Fragment>
    );
  }
}

export default Header;
