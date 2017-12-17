import React, { Component } from 'react';

class HomePage extends Component {
  render() {
    return (
      <React.Fragment>
      <h1 className="title">
        About KvaaK!
      </h1>
      <p className="subtitle">
        KvaaK! is a platform for hardcore <strong>twitchers</ strong>!
      </p>
      <div className="content">
        <hr />
        <p>With <strong>KvaaK!</strong> you can checkout what birds have been spotted by your twitcher friends and report your own sightings!</p>
      </div>
      </ React.Fragment>
    );
  }
}

export default HomePage;
