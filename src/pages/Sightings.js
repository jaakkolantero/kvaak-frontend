import React, { Component } from 'react';

class Sightings extends Component {
  render() {
    const {params} = this.props.match
    return (
      <React.Fragment>
      <h1 className="title">
        Sightings
      </h1>
      <h2 className="subtitle">
        Jimbo just saw a <strong>mockingbird</strong>! {params.id}
      </h2>
      </ React.Fragment>
    );
  }
}

export default Sightings;
