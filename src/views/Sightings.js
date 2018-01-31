import React, { Component } from 'react';
import Header from 'components/Header';
import SightingItem from 'components/SightingItem';
import {Container} from 'bloomer';
import {connect} from 'react-redux';

class Sightings extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const {
      sightings
    } = this.props;
    return (
      <React.Fragment>
        <Header title="Sightings" subtitle="Did you see that!" />
        <Container style={{ marginTop: 30, marginBottom: 30 }}>
          {sightings && sightings.map( sighting =>
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

const mapStateToProps = ({sightings}) => ({sightings});

export default connect(mapStateToProps)(Sightings);
