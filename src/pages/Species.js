import React, { Component } from 'react';

class Species extends Component {
  constructor(props) {
    super(props);
    this.state = {
      species: [],
    };
  }


  render() {
    return (
      <React.Fragment>
      {/* Reference to Sightings.js when getting real data */}
      {this.props.species.map(bird =>
          <React.Fragment key={bird}>
          <h1 className="title">
            {bird}
          </h1>
        </ React.Fragment>
      )}
      </ React.Fragment>
    );
  }
}

export default Species;
