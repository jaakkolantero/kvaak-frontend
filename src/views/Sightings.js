import React, { Component } from 'react';
import dummyData from './sightings.json';
import Header from 'components/Header';
import SightingItem from 'components/SightingItem';
import {Container} from 'bloomer';

class Sightings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sightings: [],
    };
  }

  componentDidMount() {
    fetch('https://my.api.mockaroo.com/sightings.json?key=6abd0860')
    .then( response => response.json())
    .then(data => {
      this.setState({sightings: data});
    }).catch( (error) => {
      console.log("Server error. Serving dummyData");
      this.setState({sightings: dummyData});
    });
  }

  render() {

    return (
      <React.Fragment>
        <Header title="Sightings" subtitle="Did you see that!" />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          {this.state && this.state.sightings && this.state.sightings.map( sighting =>
            <React.Fragment key={sighting.id}>
              <SightingItem {...sighting} />
              <hr />
            </React.Fragment>
          )}
        </Container>
      </React.Fragment>
    );
  }
}

export default Sightings;
