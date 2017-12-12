import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="title">
        What is that?
      </h1>
      <h2 className="subtitle">
        Is it a plane? <strong>No!</strong> Is it a bird? <strong>Yes!</strong>
      </h2>
      </ React.Fragment>
    );
  }
}

export default HomePage;
