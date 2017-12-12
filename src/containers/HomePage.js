import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <div className="hero-body">
        <div className="container">
          <h1 className="title">
            What is that?
          </h1>
          <h2 className="subtitle">
            Is it a plane? <strong>No!</strong> Is it a bird? <strong>Yes!</strong>
          </h2>
        </div>
      </div>
    );
  }
}

export default HomePage;
