import React, { Component } from 'react';

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
      console.log(data[0].dateTime);
    });
  }

  render() {

    return (
      <React.Fragment>
      <div className="container">
        {this.state && this.state.sightings && this.state.sightings.map(sighting =>
          <React.Fragment key={sighting.id}>
            <article>
              {/*TODO: ADD TOOLTIP npm install react-tooltip for bird count */}
              <p className="title">{sighting.species} <sup className="has-text-grey-light">{sighting.count} birds</sup></p>
              <p className="is-small has-text-grey-light">
                <span className="has-text-grey-dark">ufox</span>
                <span> - {sighting.dateTime}</span></p>
              <hr />
              <p className="subtitle">{sighting.description}</p>
            </article>
            <hr />
          </React.Fragment>
        )}
      </div>
      </ React.Fragment>
    );
  }
}

export default Sightings;
